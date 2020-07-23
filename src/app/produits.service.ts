import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  private REST_API_SERVER = "http://localhost:8080/produits";

  constructor(public http: HttpClient) { }


  public findall(){
    return this.http.get<any>(this.REST_API_SERVER + "/all")
  }
}
