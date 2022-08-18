import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/model/section';

@Component({
  selector: 'scan-file',
  templateUrl: './scan-file.component.html',
  styleUrls: ['./scan-file.component.css'],
})
export class ScanFileComponent implements OnInit {

  folders: Section[] = [
    {
      icon: 'insert_photo',
      name: 'Image',
      info: 'this.upl.downloadURL',
    },
    {
      icon: 'calendar_today',
      name: 'Created',
      info: 'Created: 2022-08-18T04:57:39.056Z',
    },
    {
      icon: ' my_location',
      name: 'Location',
      info: 'Mandaue City, Cebu City, Philippines',
    },
    {
      icon: 'folder',
      name: 'Type',
      info: 'Flood',
    },
    {
      icon: 'warning',
      name: 'Alert Level',
      info: '2',
    },
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
