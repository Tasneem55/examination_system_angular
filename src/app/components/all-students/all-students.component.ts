import { Component } from '@angular/core';
import { IStudents } from 'src/app/models/istudents';
import { studentsList } from 'src/app/models/studentsList';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
  studentsList : IStudents[] = [];
  constructor(){
    this.studentsList = studentsList;
  }
}
