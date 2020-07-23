import { Component, OnInit } from '@angular/core';
import { ProduitsService } from './../produits.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  produit: any;

  constructor(private produitsService: ProduitsService) { 
    produitsService.findall()
    .subscribe(res=>{
      console.log(res);
      this.produit = res;
    },
    err=>{
      console.log(err);
    });
  }

  ngOnInit(): void {
  }

}
