import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-counter',
  templateUrl: './resume-counter.component.html',
  styleUrls: ['./resume-counter.component.scss']
})
export class ResumeCounterComponent implements OnInit {

  constructor() { }

  counter = [
    {
      count:'',
      img:'assets/images/resume/icon/1.png',
      type:'Rigoureux',
      type2:'Calme et Mésuré'
    },
    {
      count:'',
      img:'assets/images/resume/icon/2.png',
      type:'Agile',
      type2:  'Travail d\'équipe'
    },
    {
      count:'',
      img:'assets/images/resume/icon/3.png',
      type:'Adaptabilité ',
      type2: 'Flexibilité'
    },
    {
      count:'',
      img:'assets/images/resume/icon/4.png',
      type: 'Concurrent',
      type2: 'Polyvalent, Autonome'
    }]

  ngOnInit() {
  }
}
