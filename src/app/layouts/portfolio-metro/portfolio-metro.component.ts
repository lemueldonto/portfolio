import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-metro',
  templateUrl: './portfolio-metro.component.html',
  styleUrls: ['./portfolio-metro.component.scss']
})
export class PortfolioMetroComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.route.snapshot.data['title']);
  }

}
