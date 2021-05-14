import { Component } from '@angular/core';
import { ColoniasService } from './services/colonias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public colonias:Array<any> = []


  constructor(
    private coloniaService:ColoniasService
  ){
      this.coloniaService.getColonias().subscribe((resp: any)=> {
        console.log(resp);
        this.colonias=resp
      })
  }
}
