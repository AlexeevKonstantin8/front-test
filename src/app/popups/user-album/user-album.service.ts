import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserAlbumModel} from './user-album.model';
import {RESTConstantURLs} from '../../app.constants';

@Injectable()
export class UserAlbumService {

  constructor(private http: HttpClient) {}

  public getUserAlbumList(userId: number): Observable<Array<UserAlbumModel>> {

    return this.http.get<Array<UserAlbumModel>>(RESTConstantURLs.USERS_ALBUM_LIST_URL + '?userId=' + userId);
  }
}
