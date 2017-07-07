import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  public step: number = 1; // Change to whatever your form is
  public order: any = {};
  constructor() { }

  ngOnInit() {
  }

  public decrementStep(): void {
    this.step--;
  }

  public incrementStep(): void {
    this.step++;
  }

}
