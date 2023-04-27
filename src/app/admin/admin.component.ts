import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  showFiller = false;
  public displayImage!: string
  constructor() { }

  ngOnInit(): void {
  }
  addItem(newItem: string) {
    this.displayImage = newItem;
  }
}
