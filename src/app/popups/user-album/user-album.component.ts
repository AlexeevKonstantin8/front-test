import { Component, OnInit } from '@angular/core';
import {UserAlbumModel} from './user-album.model';
import {UserAlbumService} from './user-album.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.sass']
})
export class UserAlbumComponent implements OnInit {

  public instanceDialog: any;
  public filterVal: string;
  public selectedColorItemId: number;
  public userId: number;
  public userAlbumsList: Array<UserAlbumModel>;
  private _service: UserAlbumService;

  constructor(private http: HttpClient) {
    this._service = new UserAlbumService(http);
  }

  ngOnInit() {
    this.selectedColorItemId = this.instanceDialog.data.selectedColorItemId;
    this.userId = this.instanceDialog.data.userId;
    this._service
      .getUserAlbumList(this.userId)
      .subscribe(data => this.userAlbumsList = data);
  }

  onNoClick(): void {
    this.instanceDialog.closeDialog();
  }

}

