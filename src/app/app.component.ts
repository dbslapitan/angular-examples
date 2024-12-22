import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  COURSES: Course[] = COURSES;

  onCourseSelected(course: Course) {
    console.log(course);
  }

  onEmptyCourses(){
    this.COURSES = [];
  }

  onRepopulateCourses(){
    this.COURSES = COURSES;
  }
}
