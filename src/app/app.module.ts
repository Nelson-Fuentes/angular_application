import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

import { UsersService } from './services/reqres/users.service';
import { MarvelService } from './services/marvel/marvel.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule } from '@angular/forms';
import { IndexComponentComponent } from './components/index-component/index-component.component';
import { MaximoPipe } from './maximo.pipe';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UsersComponent,
    IndexComponentComponent,
    MaximoPipe,
    SearchComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UsersService,
    MarvelService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
