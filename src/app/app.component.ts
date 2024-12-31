import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {Course} from './model/course';
import {CoursesService} from './courses/courses.service';
import {CourseCardComponent} from './courses/course-card/course-card.component';
import {FilterCategoryPipe} from './courses/filter-category.pipe';
import {CourseImageComponent} from './courses/course-image/course-image.component';

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
  imports: [
    CourseCardComponent,
    FilterCategoryPipe,
    CourseImageComponent
  ],
  standalone: true
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>;

  courses: Course[];

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    console.log('ngOnInit');
    this.coursesService.loadCourses().subscribe(courses => {
      this.courses = courses;
      console.log(courses)
    });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course);
  }

  onEditCourse(){
    this.courses[1].category = "ADVANCED";
  }

}
