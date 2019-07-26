import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/reqres/users.service';
import { Users, User } from '../../interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  page: number;
  max_page: number;
  btnNext: boolean;
  btnPrev: boolean;
  edit: boolean;
  add: boolean;
  alert: boolean;
  error: boolean;
  message: String;
  index_edit: number;

  /*
  • edit_User es el objeto de tipo usuario que usara para hacer el update
  */ 
  edit_User: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  /*
  • new_User es el objeto de tipo usuario que se usara para crear nuevos usuarios
  */

  new_User: User = {
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  };

  constructor(private _userService: UsersService) {
    this.page = 0;
    this.max_page = 1;
    this.readPage(1);
  }

  /*
  • Metodo que determina si se muestran o no los botones de siguiente y anterior pagina 
  */
  showButtons(){
    if (this.page < this.max_page) {
      this.btnNext = true;
    } else {
      this.btnNext = false;
    }
    if (this.page > 1) {
      this.btnPrev = true;
    } else {
      this.btnPrev = false;
    }
  }

  /*
  • Metodo que actualiza la vista de una pagina de usuarios
  */

  readPage(page: number) {
    this.page = page;
    this._userService.getData(page).subscribe((data: Users) => {
      console.log(data);
      this.users = data.data;
      this.max_page = data.total_pages;
      this.showButtons();
    });
  }

  /*
  • Muestra el formulario para añadir usuario y vacia sus campos
  */
  addShow() {
    this.add = true;
    this.new_User.id = 0;
    this.new_User.last_name = '';
    this.new_User.first_name = '';
    this.new_User.email = '';
    this.new_User.avatar = '';
  }

  /*
  • Envia un mensaje en casi alguna funcion no se realize
  */
  advertencia(message: string) {
    this.error = true;
    this.message = message;
    setTimeout(() => {
      this.error = false;
    }, 1500);
  }
  /*
  • Envia un mensaje indicando que se realizo una funcion
  */
  exito(message: string) {
    this.alert = true;
    this.message = message;
    setTimeout(() => {
      this.alert = false;
    }, 1500);
  }

  /*
  • Valida los campos de un formulario representado por una variable del tipo User
  */
  validarFormulario(userForm: User) {
    if (userForm.last_name.length == 0 || userForm.first_name.length == 0 || userForm.email.length == 0 || userForm.avatar.length == 0) {
      this.advertencia("Complete el formulario por favor");
      console.log(userForm);
      return false;
    } else if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(userForm.email))) {
      this.advertencia("Correo Invalido");

      return false;
    }
    return true;
  }

  /*
  • Muestra el formulario de edicion de usuario
  */
  updateShow(id: number, index: number) {
    this.index_edit = index;
    this.edit = true;
    this.btnNext = false;
    this.btnPrev = false;
    this.edit_User.id = this.users[index].id;
    this.edit_User.last_name = this.users[index].last_name;
    this.edit_User.first_name = this.users[index].first_name;
    this.edit_User.email = this.users[index].email;
    this.edit_User.avatar = this.users[index].avatar;

  }
  /*
  Cierra el formulario de edicion de usuario
  */
  exitEdit() {
    this.edit = false;
    this.showButtons();
    return false;
  }

  /*
  Actualiza los valores del Usuario
  */
  update() {
    console.log(this.edit_User);
    if (this.validarFormulario(this.edit_User)) {
      this._userService.update(this.edit_User).subscribe(data => {
        console.log(data);
        this.users[this.index_edit].id = data.id;
        this.users[this.index_edit].last_name = data.last_name;
        this.users[this.index_edit].first_name = data.first_name;
        this.users[this.index_edit].email = data.email;
        this.users[this.index_edit].avatar = data.avatar;
        this.exito("Actualizacion exitosa.");
        this.exitEdit();
      });
    }
    return false;
  }

  /*
  Añade un usuario al arreglo users dependiendo de la respues de la API
  */
  addUser() {
    if (this.validarFormulario(this.new_User)) {
      this._userService.add(this.new_User).subscribe(data => {
        console.log(data);
        this.users.push(data);
        this.add = false;
        this.exito('Usuario añadido satisfactoriamente');
      });
    }
    return false;
  }

  /*
  Elimina un usario usando la Api y lo elimina del array users
  */
  deleteUser(id: number, index: number) {
    this.exitEdit();
    this._userService.deleteUser(id);
    this.users.splice(index, 1);
    this.exito('Elemento eliminado con exito');
  }

  ngOnInit() {
  }
}
