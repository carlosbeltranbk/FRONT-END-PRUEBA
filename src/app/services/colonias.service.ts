import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ColoniasService {

  url = 'https://5c71ab53ea8b.ngrok.io/api/cors/listaColonias';
  constructor(
    private http:HttpClient
  ) { 
    console.log('Servicio colonia')
  }


  getColonias(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
