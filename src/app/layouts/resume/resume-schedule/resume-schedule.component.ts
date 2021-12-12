import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-schedule',
  templateUrl: './resume-schedule.component.html',
  styleUrls: ['./resume-schedule.component.scss']
})
export class ResumeScheduleComponent implements OnInit {

  constructor() { }

schedule = [
  {
    name:'Développeur FRONTEND',
    entreprise:'AIR FRANCE',
    description:'Attaché à la ligne de produit Cargo OPS Handler, la mission consiste à:' +
    '\n- Analyser et comprendre le fonctionnements des produits existants'+
    '\n-Développer intégralement l\'interface graphique en Angular 11'+
    '\n-Modifier l\'architecture de communication client-serveur pour s\'adapter au nouveau framework',
    toTime: '30/09/2021',
    endTime: 'TODAY'
  },
  {
    name:'Assistant Ingénieur Systèmes et Réseaux ',
    entreprise:'LABORATOIRE I3S/CNRS',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '01/07/2021',
    endTime: '01/09/2021'
  },
  {
    name:'Développeur ISA & DEVOPS',
    entreprise:'POLYTECH NICE SOPHIA',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '25/01/2021',
    endTime: '21/05/2021'
  },
  {
    name:'Développeur FULLSTACK',
    entreprise:'POLYTECH NICE CONSEIL',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of.',
    toTime: '04/04/2020',
    endTime: '04/01/2021'
  }
]

  ngOnInit() {
  }
}
