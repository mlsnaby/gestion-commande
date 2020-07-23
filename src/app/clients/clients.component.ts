import { Component, OnInit } from '@angular/core';

import { ClientsService } from './../clients.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: any;

  constructor(private medecinService: ClientsService) { 
    medecinService.findAll()
    .subscribe(res=>{
      console.log(res);
      this.client = res;
    },
    err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
