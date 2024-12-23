import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../model/course';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgIf,
    NgClass
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

  cardClasses(){
    if(this.course.category === 'BEGINNER'){
      return {
        beginner: true,
        intermediate: false,
        advanced: false
      }
    }
    else if(this.course.category === 'INTERMEDIATE'){
      return {
        beginner: false,
        intermediate: true,
        advanced: false
      }
    }
    else if(this.course.category === 'ADVANCED'){
      return {
        beginner: false,
        intermediate: false,
        advanced: true
      }
    }
    return {
      beginner: false,
      intermediate: false,
      advanced: false
    }
  }
}
