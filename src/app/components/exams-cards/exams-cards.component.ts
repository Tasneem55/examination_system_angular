import { Component } from '@angular/core';
import { ISubjects } from 'src/app/models/isubjects';
import { subjectList } from 'src/app/models/subjectslist';

@Component({
  selector: 'app-exams-cards',
  templateUrl: './exams-cards.component.html',
  styleUrls: ['./exams-cards.component.css']
})
export class ExamsCardsComponent {
  subjectList : ISubjects[] = [];
  constructor(){
    this.subjectList = subjectList;
  }
}
