import { Component, Input, OnInit } from '@angular/core';
import { CourseInterface } from '../courses-page.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() coursesList: CourseInterface[] = [];
}
