import { Component, Input, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/model/section';

@Component({
  selector: 'level-file',
  templateUrl: './level-file.component.html',
  styleUrls: ['./level-file.component.css']
})
export class LevelFileComponent implements OnInit {
  @Input() displayImage = '';

  folders: Section[] = [
    {
      icon: 'warning',
      name: 'Disaster Classification:',
      info: 'Flood',
    },
    {
      icon: 'warning',
      name: 'Disaster Level:',
      info: 'Critical Level',
    },
    {
      icon: 'calendar_today',
      name: 'Date of Detection:',
      info: '2022-08-18T04:57:39.056Z',
    },
    {
      icon: 'my_location',
      name: 'Affected Area:',
      info: 'Mandaue City, Cebu City, Philippines',
    },
  ];

  damages: Section[] = [
    {
      icon: 'insert_photo',
      name: 'Disaster Level',
      info: 'Critical',
    },
    {
      icon: 'folder',
      name: 'Damage Ratio',
      info: '80%',
    },
    {
      icon: 'calendar_today',
      name: 'Detected On',
      info: 'Created: 2022-08-18T04:57:39.056Z',
    },
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
