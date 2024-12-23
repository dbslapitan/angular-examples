import {Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './components/course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  COURSES: Course[] = COURSES;

  @ViewChild(CourseCardComponent, {read: ElementRef})
  card: ElementRef;

  @ViewChild('divContainer')
  cardEl: ElementRef;

  onCourseSelected(course: Course) {

    console.log(this.card);
  }

  onEmptyCourses(){
    this.COURSES = [];
  }

  onRepopulateCourses(){
    this.COURSES = COURSES;
  }

  trackFunction(index: number, course: Course) {
    return course.id;
  }
}
