import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PanelService } from '../services/panel.service';
@Component({
  selector: 'app-agape-details',
  templateUrl: './agape-details.page.html',
  styleUrls: ['./agape-details.page.scss'],
})
export class AgapeDetailsPage implements OnInit {

  ibadahData: any;
  dataJemaats: any[];
  namaIbadah: any;

  constructor( public http: HttpClient, public panel: PanelService) { }

  ngOnInit() {
    this.panel.getAgapesApi().subscribe(
      (v: any) => {
        this.ibadahData = v.data;
        this.namaIbadah = this.ibadahData.nama_ibadah;
        this.dataJemaats = this.ibadahData.jemaat;

        console.log(this.dataJemaats);
        console.log(this.ibadahData);
      }
    );
  }
  }


