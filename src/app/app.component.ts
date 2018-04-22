import { Component, OnInit } from '@angular/core';
import {ColorItem, UserPropsModel} from './app.model';
import {AppService} from './app.service';
import {HttpClient} from '@angular/common/http';
import {DynamicLoaderService} from './dynamic-loader';
import {UserAlbumComponent} from './popups/user-album/user-album.component';
import {UserPropsComponent} from './popups/user-props/user-props.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public colorItems: Array<ColorItem>;
  public selectedColorItem: ColorItem;
  public filterVal: string;
  public userList: Array<UserPropsModel>;
  private _service: AppService;

  constructor(private http: HttpClient, private dialog: DynamicLoaderService) {
    this.colorItems = [
      {
        id: 0,
        value: 'Светлая',
        color: '#e6e9ef',
      },
      {
        id: 1,
        value: 'Темная',
        color: '#030911',
      }
    ];
    this.selectedColorItem = this.colorItems[0];
    this.userList = [];
    this._service = new AppService(this.http);
  }

  ngOnInit() {
    this._service
      .getUserList()
      .subscribe(data => this.userList = data);
  }

  public onNameClick(userId: number) {
    const subdialogRef = this.dialog.openDialog(UserAlbumComponent, {
      data: {
        userId: userId,
        selectedColorItemId: this.selectedColorItem.id,
      },
      className: 'dialog-window__half-screen'
    });
    subdialogRef.afterClosed.subscribe(data => {});
  }

  public onEditClick(userProps: UserPropsModel) {
    const subdialogRef = this.dialog.openDialog(UserPropsComponent, {
      data: {
        user: Object.assign({}, userProps),
        selectedColorItemId: this.selectedColorItem.id,
      },
      className: 'dialog-window__half-screen'
    });
    subdialogRef.afterClosed.subscribe(data => {
      if (data) {
        this.userList.forEach(user => {
          if (user.id === data.id) {
            Object.assign(user, data);
          }
        })
      }
    });
  }
}
