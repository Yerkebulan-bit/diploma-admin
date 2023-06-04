import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../environment/environment";
import {Injectable} from "@angular/core";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UserController {

  CONTROLLER_SUFFIX = BASE_URL + 'user';

  constructor(private http: HttpClient) {
  }

  loadUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.CONTROLLER_SUFFIX + '/load-users');
  }

  disableUser(username: string) {
    return this.http.post(this.CONTROLLER_SUFFIX + "/disable?username=" + username, {});
  }

  enableUser(username: string) {
    return this.http.post(this.CONTROLLER_SUFFIX + "/enable?username=" + username, {});
  }

}

