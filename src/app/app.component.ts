import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, DoCheck,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CoursesService} from './services/courses.service';

// function courseServiceProvider(http: HttpClient): CoursesService {
//   return new CoursesService(http);
// }
//
// const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html',
//     styleUrls: ['./app.component.css'],
//     standalone: false,
//   providers: [{
//   provide: COURSES_SERVICE,
//   useFactory: courseServiceProvider,
//   deps: [HttpClient]
// }]})

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   standalone: false,
//   providers: [{
//     provide: CoursesService,
//     useClass: CoursesService
//   }]})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>;

  courses: Course[];

  constructor(private coursesService: CoursesService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.coursesService.loadCourses().subscribe(courses => {
      this.courses = courses;

      this.cd.markForCheck();
    });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course);
  }

}
