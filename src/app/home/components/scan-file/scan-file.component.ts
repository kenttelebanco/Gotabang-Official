import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/model/section';

@Component({
  selector: 'scan-file',
  templateUrl: './scan-file.component.html',
  styleUrls: ['./scan-file.component.css']
})
export class ScanFileComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
