import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  public displayImage!: string
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: string) {
    this.displayImage = newItem;
  }
}
