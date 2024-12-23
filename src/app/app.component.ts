import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './components/course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

  COURSES: Course[] = COURSES;

  // @ViewChild(CourseCardComponent, {read: ElementRef})
  // card: ElementRef;
  //
  // @ViewChild('divContainer')
  // cardEl: ElementRef;

  // @ViewChildren(CourseCardComponent)
  // cards: QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  onCourseSelected(course: Course) {
  //console.log(this.cards);

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

  onAddCourse() {
    this.COURSES.push({
      id: COURSES.length + 1,
      description: "Angular Core Deep Dive",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: 'INTERMEDIATE',
      lessonsCount: 10
    });

  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(changes => {console.log(changes);});
  }
}
