import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-search',
  /*
  • los valores de qui fueron cambiados ya que usa la misma vista que el compenente index
  */

  templateUrl: '../index-component/index-component.component.html',
  styleUrls: ['../index-component/index-component.component.css']
})
export class SearchComponent implements OnInit {
  search : string;
  results : any[];
  constructor( private route: ActivatedRoute, private service: MarvelService ) {
    this.route.params.subscribe(data=>{
     /*
     • Se reciben los parametros de la URL
     • Se hace la consulta al servicio de Marvel
     • se actualiza el arreglo results con la respuesta recibida
     */
      this.search = data['search'];
      this.service.search(this.search).subscribe(data => {
        this.results = data.data.results;
        console.log(this.results);

      });
    });
  }

  ngOnInit() {
  }

}
