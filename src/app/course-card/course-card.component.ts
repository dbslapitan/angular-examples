import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter, InjectionToken,
  Input, OnChanges,
  OnInit,
  Output,
  QueryList, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Course} from '../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';
import {CoursesService} from '../services/courses.service';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    standalone: false,
    })
export class CourseCardComponent implements OnInit, OnChanges {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor() {

    }

    ngOnInit() {

    }


    onSaveClicked(description:string) {

        this.courseEmitter.emit({...this.course, description});

    }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges');
  }




}
