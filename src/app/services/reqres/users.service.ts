import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, Users } from '../../interfaces/User';
 
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uri: string = 'https://reqres.in';

  constructor(private http: HttpClient) { 

  }

  getData(page: number){
    return this.http.get<Users>(this.uri + '/api/users?page='+ page);
  }

  deleteUser (id: number){
    return this.http.delete(this.uri + '/api/users/'+id);
  }

  update(user: User){
    return this.http.put<User>(this.uri + '/api/users/'+user.id, user);
  }

  add(user: User){
    return this.http.post<User>(this.uri + '/api/users/'+user.id, user);
  }
}
