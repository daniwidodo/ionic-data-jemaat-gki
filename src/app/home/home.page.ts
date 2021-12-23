import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PanelService } from './../services/panel.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ibadahTitle: any;
  ibadahId: any;
  agapeTitle: any;
  eventArray: any;
  constructor(private panel: PanelService, public router: Router) {
    this.getIbadah();
    this.getAgape();
    this.getEvent();
  }

  gotoDetails() {
    this.router.navigate(['details']);
  }

  gotoIbadahDetails() {
    this.router.navigate(['ibadah-details', this.ibadahId]);
  }
  gotoAgapeDetails() {
    this.router.navigate(['details']);
  }
  gotoEventsDetails() {
    this.router.navigate(['details']);
  }

  getIbadah()
  {
    this.panel.getIbadahsApi().subscribe((v: any) => {
      const resData = v.data;
      this.ibadahTitle = resData.namaIbadah;
      this.ibadahId = resData.id;

      console.log(resData);
    });
  }

  getAgape()
  {
    this.panel.getAgapesApi().subscribe((v: any) => {
      const resData = v.data;
      this.agapeTitle = resData.nama_ibadah;

      console.log(resData);
    });
  }

  getEvent()
  {
    this.panel.getEventsApi().subscribe((v: any) => {
      const resData = v.data;
      this.eventArray = resData;
      console.log(resData);
    });
  }
}
