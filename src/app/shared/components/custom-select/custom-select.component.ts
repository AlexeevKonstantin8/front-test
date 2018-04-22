import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ColorItem} from '../../../app.model';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.sass']
})
export class CustomSelectComponent implements OnInit {

  @Input() rows: Array<any>;
  @Input() selectedRow: ColorItem;
  @Output() selectedRowChange: EventEmitter<ColorItem>;
  public isPopupOpened: boolean;

  constructor() {
    this.selectedRowChange = new EventEmitter();
  }

  ngOnInit() {
  }

  public onRowClick(selectedOption: ColorItem) {
    this.selectedRowChange.emit(selectedOption);
    this.isPopupOpened = false;
  }

  public onChange(event: Event) {
    this.isPopupOpened = ! this.isPopupOpened;
    if (this.isPopupOpened) {
      setTimeout(() => document.body.addEventListener('click', this._clickListener))
    }
  }

  private _clickListener = () => {
    this.isPopupOpened = false;
    document.body.removeEventListener('click', this._clickListener);
  }

}
