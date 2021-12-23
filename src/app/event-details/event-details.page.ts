import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PanelService } from '../services/panel.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  eventId: any;
  eventTitle: any;
  eventJemaats: any;

  constructor( private activatedRoute: ActivatedRoute, private http: HttpClient, private panel: PanelService ) { }

  ngOnInit() {
    this.eventId = this.activatedRoute.snapshot.params.id;
    console.log(this.eventId);

    ////////

    this.http.get( this.panel.endPoint + 'events' + '/' + this.eventId ).subscribe(
      (v: any) => {
        const eventData = v.data;
        this.eventTitle = eventData.title;
        this.eventJemaats = eventData.jemaats;


        console.log(v);
        console.log(eventData);
        console.log(this.eventTitle);
        console.log(this.eventJemaats);


      }
    );
  }

}
