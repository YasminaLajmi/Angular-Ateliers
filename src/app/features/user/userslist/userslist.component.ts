import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../core/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css'],
})
export class UserslistComponent implements OnInit,OnDestroy{
  searchtext: string = '';
  listusers: User[] = [
    {
      idCustomer: 1,
      firstName: 'Mila',
      lastName: ' Kunis',
      birthDate: '1999-06-30',
      accountCategory: 'Admin',
      email: 'mila@kunis.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar3.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 2,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar2.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 3,
      firstName: 'George',
      lastName: 'Clooney',
      birthDate: '1999-06-30',
      accountCategory: 'Customer',
      email: 'marlon@brando.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar1.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 4,
      firstName: 'Ryan',
      lastName: 'Gossling',
      birthDate: '1999-06-30',
      accountCategory: 'Golden',
      email: 'Ryan@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar4.png',
      profession: 'Software Engineer',
    },
    {
      idCustomer: 5,
      firstName: 'Robert',
      lastName: 'Downey',
      birthDate: '1999-06-30',
      accountCategory: 'Blocked Account',
      email: 'robert@nicholson.com',
      password: 'test',
      picture: 'https://bootdey.com/img/Content/avatar/avatar5.png',
      profession: 'Software Engineer',
    },
  ];
  constructor(private _userService: UserService){}
  ngOnDestroy(): void {
   console.log("destroyed");
  }
  ngOnInit(): void {
this.listusers= this._userService.getAllUsers(); 
console.log(this._userService.fetchNbInList(this.listusers,'firstName','Robert')); }
  deleteUser(id: number) {
    this.listusers = this.listusers.filter((u) => u.idCustomer != id);
  }

  searchUser() {
    this.searchtext != ''
      ? (this.listusers = this.listusers.filter(
          (u) => u.accountCategory == this.searchtext
        ))
      : (this.listusers = this.listusers);
  }
}
