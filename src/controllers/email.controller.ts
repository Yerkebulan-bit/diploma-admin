import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../environment/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EmailController {

  CONTROLLER_SUFFIX = BASE_URL + 'email';

  constructor(private http: HttpClient) {
  }

  sendMail(message: string, subject: string) {
    return this.http.post(this.CONTROLLER_SUFFIX + '/send-mailing?message=' + message + "&subject=" + subject, {});
  }

}

