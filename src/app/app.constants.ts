import { environment } from './../environments/environment';

export class RESTConstantURLs {

  public static readonly USERS_LIST_URL = environment.url + '/users';
  public static readonly USERS_ALBUM_LIST_URL = environment.url + '/albums';

}
