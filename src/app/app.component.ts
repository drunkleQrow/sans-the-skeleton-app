import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public step: number = 1; // Change to whatever your form is
  public order: any = {};
  constructor() { }

  ngOnInit() {
  }

  public decrementStep(): void {
    this.step--;
  }

  public incrementStep(form: any): void {
    this.step++;
  }
}
