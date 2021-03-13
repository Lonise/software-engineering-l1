import { Component, OnInit } from '@angular/core';

export interface CourseInterface {
  id: number;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  public coursesList: CourseInterface[] = [
    {
      id: 1,
      title: 'HTML course',
      creationDate: new Date(),
      duration: 45,
      description: 'HTML course HTML course',
    },
    {
      id: 2,
      title: 'CSS course',
      creationDate: new Date(),
      duration: 30,
      description: 'CSS course CSS course',
    },
    {
      id: 3,
      title: 'JS course',
      creationDate: new Date(2020, 3, 13),
      duration: 25,
      description: 'JS course JS course',
    },
  ];
}
