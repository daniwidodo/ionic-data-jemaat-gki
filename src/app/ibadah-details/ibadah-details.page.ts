import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-ibadah-details',
  templateUrl: './ibadah-details.page.html',
  styleUrls: ['./ibadah-details.page.scss'],
})
export class IbadahDetailsPage implements OnInit {

  constructor( public http: HttpClient) { }

  ngOnInit() {
  }

}
