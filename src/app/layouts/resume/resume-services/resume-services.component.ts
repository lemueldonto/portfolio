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
      type:'Architecture Logiciel',
      content: 'Connaissances des bases de l\'architecture logiciel, Conception de systèmes en developpement et intégration continue.' +
          'Utilisation d\'outils et méthodes DevOps dans la gestion d\'infrastructures informatiques'+
          'Mise an place des tests d\'intégration et de regression' +
          'Utilisation des outils comme J2E, .NET, Docker,Kubernetes, Artifactory, Jenkins, etc.'
    },
    {
      img:'assets/images/resume/service-exprience/6.png',
      type:'Dévélopement Web',
      content: 'Compétences acquises au bout de plusieurs projets de dévéloppement Web. Mise en place de Web Services (Fonctionnalités métiers) ' +
          'Mise en place si nécéssaire des microservices. Developpement d\'applications Web sous forme de SDK.' +
          'Utilisation des outils comme HTML, Python, Javascript, Spring, Spring Boot, Java EE, Artifactory, Docker, etc.',
    },
    {
      img:'assets/images/resume/service-exprience/7.png',
      type:'Developement FullStack',
      content: 'Développement de systèmes Client - Serveur. Conception de sites attractifs mais adaptés aux besoins des utilisateurs, prenant en compte ' +
          'l\'adaptation sur plusieurs types d\'écrans (Resonsive Design).'+
          'Mise en place d\'interfaces d\'offre de services et de données. Ionic, Angular, Django, NodeJS etc...'
    },
    {
      img:'assets/images/resume/service-exprience/8.png',
      type:'IOT & Intélligence Ambiante',
      content: 'Connaissances de bases en IOT & Intelligente Ambiante. '+
          'Programmation de cartes Arduino. Mise en systèmes et logiciels embarqués. Conception de systèmes cyber-physiques.' +
          'Arduino, MicroC/OS-II, FreeRTOS'
    }
   ]

  ngOnInit() {
  }


}
