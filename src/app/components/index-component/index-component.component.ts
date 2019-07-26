import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel/marvel.service';

@Component({
  selector: 'app-index-component',
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent implements OnInit {
  results : any[];
  constructor(private service: MarvelService) {

    /*
    • Se actualiza el array results con la respuesta de la API Marvel
    */

    this.service.getComics().subscribe(data => {
      console.log(data.data.results);
      this.results = data.data.results;
    });
  }

  ngOnInit() {
  }

}
