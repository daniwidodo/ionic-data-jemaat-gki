import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PanelService } from '../services/panel.service';
@Component({
  selector: 'app-ibadah-details',
  templateUrl: './ibadah-details.page.html',
  styleUrls: ['./ibadah-details.page.scss'],
})
export class IbadahDetailsPage implements OnInit {
  ibadahData: any;
  dataJemaats: any[];
  namaIbadah: any;
  constructor(public http: HttpClient, public panel: PanelService) {}

  ngOnInit() {
    this.panel.getIbadahsApi().subscribe(
      (v: any) => {
        this.ibadahData = v.data;
        this.namaIbadah = this.ibadahData.namaIbadah;
        this.dataJemaats = this.ibadahData.jemaat;

          console.log(this.dataJemaats);
        console.log(this.ibadahData);
      }
    );
  }
}
