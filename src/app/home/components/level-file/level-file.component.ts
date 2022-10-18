import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/shared/model/section';

@Component({
  selector: 'level-file',
  templateUrl: './level-file.component.html',
  styleUrls: ['./level-file.component.css']
})
export class LevelFileComponent implements OnInit {
  folders: Section[] = [
    {
      icon: 'warning',
      name: 'Disaster Level:',
      info: 'Critical Water Level',
    },
    {
      icon: 'calendar_today',
      name: 'Detected:',
      info: '2022-08-18T04:57:39.056Z',
    },
    {
      icon: 'my_location',
      name: 'Location:',
      info: 'Mandaue City, Cebu City, Philippines',
    },
  ];
  constructor() {
   }

  ngOnInit(): void {
  }

}
