import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
 @Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  search : string;
  constructor(private router : Router) {

  }

  /*
   • Se redirecciona a la buscaqueda con el parametro ingresado 
   */
  find(){
    console.log(this.search);
    this.router.navigate(['search/'+this.search]);
    return false;
  }
  ngOnInit() {
  }

}
