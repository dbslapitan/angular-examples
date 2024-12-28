import {AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, TemplateRef} from '@angular/core';
import {Course} from '../../model/course';
import {NgClass, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [
    NgClass,
    NgStyle,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgTemplateOutlet
  ],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {

  @Input()
  noImgTpl: TemplateRef<any>;

  @Input({required:true})
  course: Course;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild('imageEl')
  imageEl: ElementRef;

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

  cardStyles(){
    return {
      // backgroundImage: `url(${this.course.iconUrl})`,
    }
  }

  ngAfterViewInit(): void {
    console.log(this.imageEl);
  }
}
