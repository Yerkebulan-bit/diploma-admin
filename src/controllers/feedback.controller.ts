import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../environment/environment";
import {Injectable} from "@angular/core";
import {FeedbackMessage} from "../model/FeedbackMessage";

@Injectable({
  providedIn: 'root'
})
export class FeedbackController {

  CONTROLLER_SUFFIX = BASE_URL + 'feedback';

  constructor(private http: HttpClient) {
  }

  loadMessages(): Observable<FeedbackMessage[]>{
    return this.http.get<FeedbackMessage[]>(this.CONTROLLER_SUFFIX + '/load-messages');
  }

}

