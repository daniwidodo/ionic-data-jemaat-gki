import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanelService {
  endPoint = 'https://panelv1.gkisulsel.org/api/';
  constructor( public http: HttpClient) { }
  getEventsApi()
  {
   return this.http.get( this.endPoint + 'events');
  }

  getIbadahsApi()
  {
   return this.http.get( this.endPoint + 'ibadahs');
  }

  getAgapesApi()
  {
   return this.http.get( this.endPoint + 'agapes');
  }
}
