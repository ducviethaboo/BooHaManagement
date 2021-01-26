import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.setTitle("BooHa-Management");
  }
  title = 'front-end';
  constructor(private titleService: Title) {}
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
