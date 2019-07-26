import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component'
import { IndexComponentComponent } from './components/index-component/index-component.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { 
    path: 'users', component: UsersComponent
  },
  {
    path: '',
    component: IndexComponentComponent
  },
  {
    path: 'search/:search',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
