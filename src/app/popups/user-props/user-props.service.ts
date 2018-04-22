import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {RESTConstantURLs} from '../../app.constants';
import {UserPropsModel} from '../../app.model';

@Injectable()
export class UserPropsService {

  constructor(private http: HttpClient) {}

  public updateUserProps(props: UserPropsModel): Observable<UserPropsModel> {

    return this.http.put<UserPropsModel>(RESTConstantURLs.USERS_LIST_URL + '/' + props.id, JSON.stringify(props), {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
}
