import {
  ComponentFactoryResolver, Injectable, Injector,
  EmbeddedViewRef, Renderer2, ApplicationRef, EventEmitter, RendererFactory2
} from '@angular/core';

@Injectable()
export class DynamicLoaderService {

  private modals: Array<any>;
  private counter: number;
  private renderer: Renderer2;

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    public appRef: ApplicationRef,
    rendererFactory: RendererFactory2
  ) {
    this.modals = [];
    this.counter = 0;
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private removeComponentFromApplication(id: number) {
    let index;
    const modal = this.modals.filter((currentModal, i) => {
      index = i;
      return currentModal.id === id;
    })[0];
    this.appRef.detachView(modal.view);
    modal.view.destroy();
    this.renderer.removeChild(document.body, modal.wrapper);
    this.modals.splice(index, 1);
  }

  public openDialog(componentRef: any, data: any) {

    const id = this.counter++;
    const factory = this.factoryResolver.resolveComponentFactory(componentRef);
    const component = factory.create(this.injector);
    const view = component.hostView as EmbeddedViewRef<any>;
    this.appRef.attachView(view);
    const dialogWindow = this.renderer.createElement('div');
    const dialogWrapper = this.renderer.createElement('div');
    this.renderer.addClass(dialogWindow, 'dialog-window');
    this.renderer.addClass(dialogWrapper, 'dialog-wrapper');
    data && data.className && this.renderer.addClass(dialogWindow, data.className);
    view.rootNodes.length && view.rootNodes.forEach(node => this.renderer.appendChild(dialogWindow, node as HTMLElement));
    this.renderer.appendChild(dialogWrapper, dialogWindow);
    this.renderer.appendChild(document.body, dialogWrapper);

    this.modals.push({
      id: id,
      view: view,
      wrapper: dialogWrapper
    });

    const result = this.createDialogRef(id);
    component.instance['instanceDialog'] = {};
    component.instance['instanceDialog'].data = data && data.data;
    component.instance['instanceDialog'].closeDialog = result.close;

    return result;
  }

  private createDialogRef(id: number) {
    const closeEmitter = new EventEmitter();
    return {
      close: data => {
        this.removeComponentFromApplication(id);
        closeEmitter.emit(data);
      },
      afterClosed: closeEmitter,
    };
  }
}
