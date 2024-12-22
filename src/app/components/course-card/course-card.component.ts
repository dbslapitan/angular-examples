import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../model/course';
import {NgIf} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgIf
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input({required:true})
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onViewClick(){
    console.log("View Clicked...");
    this.courseSelected.emit(this.course);
  }
}
