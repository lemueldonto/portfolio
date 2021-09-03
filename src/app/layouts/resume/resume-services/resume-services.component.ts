import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-services',
  templateUrl: './resume-services.component.html',
  styleUrls: ['./resume-services.component.scss']
})
export class ResumeServicesComponent implements OnInit {

  constructor() { }

  service = [
    {
      img:'assets/images/resume/service-exprience/1.png',
      type:'Langages',
      content: 'C, C++, C#, Java, JavaScript, Python, PHP, Pascal, Scheme, TypeScript, HTML, CSS, XML'
    },
    {
      img:'assets/images/resume/service-exprience/2.png',
      type:'Frameworks',
      content: 'React, Angular, NodeJS, Django, Spring, Vue.JS, Bootstrap, Ionic, NativeScript, JavaEE'
    },
    {
      img:'assets/images/resume/service-exprience/3.png',
      type:'Systèmes d\'exploitation',
      content: 'Windows, Linux, Android, MicroC/OS-II, MicroC/OS-III, FreeRTOS, IOS'
    },
    {
      img:'assets/images/resume/service-exprience/4.png',
      type:'Autres technologies',
      content: 'Docker, Cucumber, SQL Server, MySQL, PostgreSQL, Firebase, AirSim, Arduino, Raspberry'
    },
    {
      img:'assets/images/resume/service-exprience/5.png',
      type:'Web Design',
      content: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant\n' +
          'and actionable.'
    },
    {
      img:'assets/images/resume/service-exprience/6.png',
      type:'Web Devloper',
      content: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant\n' +
          'and actionable.'
    },
    {
      img:'assets/images/resume/service-exprience/7.png',
      type:'Web Design',
      content: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant\n' +
          'and actionable.'
    },
    {
      img:'assets/images/resume/service-exprience/8.png',
      type:'Web Design',
      content: 'Unlike team chat apps, Flow is designed to help your team stay focused by keeping relevant\n' +
          'and actionable.'
    }
   ]

  ngOnInit() {
  }


}
