import { Component, OnInit } from '@angular/core';
import { IplanCards } from 'src/app/models/iplanCards';
import { IServices } from 'src/app/models/iservices';
import { IUsers } from 'src/app/models/iusers';
import { plancardslist } from 'src/app/models/plancardslist';
import { servicesList } from 'src/app/models/serviceslist';
import { usersList } from 'src/app/models/userslist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {}
  plancardslist : IplanCards[] = [];
  servicesList : IServices[] = [];
  usersList : IUsers[] = [];
  constructor(){
    this.plancardslist = plancardslist;
    this.servicesList = servicesList;
    this.usersList = usersList;
  }
}
