import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserPropsModel} from './app.model';
import {RESTConstantURLs} from './app.constants';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  public getUserList(): Observable<Array<UserPropsModel>> {

    return this.http.get<Array<UserPropsModel>>(RESTConstantURLs.USERS_LIST_URL);
  }
}
