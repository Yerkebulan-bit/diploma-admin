import {Observable} from "rxjs";
import {EventToSave} from "../model/EventToSave";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BASE_URL} from "../environment/environment";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EventController {

  CONTROLLER_SUFFIX = BASE_URL + 'event';

  constructor(private http: HttpClient) {
  }

  loadEvents(): Observable<EventToSave[]>{
    return this.http.get<EventToSave[]>(this.CONTROLLER_SUFFIX + '/load-events-admin');
  }

  setAsMain(eventId: string){
    return this.http.post(this.CONTROLLER_SUFFIX + '/set-as-main?eventId=' + eventId, {});
  }

  unsetAsMain(eventId: string){
    return this.http.post(this.CONTROLLER_SUFFIX + '/unset-as-main?eventId=' + eventId, {});
  }

}

