import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-about',
  templateUrl: './resume-about.component.html',
  styleUrls: ['./resume-about.component.scss']
})
export class ResumeAboutComponent implements OnInit {
  about=[
    {
      code: 'Bac F2',
      name:'Baccalauréat Série F2 (Electronique)',
      year:'Juin 2017',
      school:'Ecole Polytechnique IEG',
      location: 'Lomé, TOGO'
    },
    {
      code: 'BAC +2',
      name:'Ingénieur Génie Logiciel, Systèmes & Réseaux',
      year:'Juin 2019',
      school:'IAI - TOGO',
      location: 'Lomé, TOGO'
    },
    {
      code: 'Licence',
      name:'Cycle Ingénieur - Sciences Informatiques (Licence)',
      year:'Juin 2020',
      school:'Polytech Nice Sophia',
      location: 'Sophia Antipolis, FRANCE'
    },
    {
      code: 'Master 2',
      name:'Cycle Ingénieur - Sciences Informatiques (Master)',
      year:'Juin 2022',
      school:'Polytech Nice Sophia',
      location: 'Sophia Antipolis, FRANCE'
    }
  ]
  constructor() { }

  ngOnInit() {
  }


}
