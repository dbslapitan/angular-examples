import { Pipe, PipeTransform } from '@angular/core';
import {Course} from '../model/course';

@Pipe({
  name: 'filterByCategory'
})
export class FilterCategoryPipe implements PipeTransform {

  transform(courses: Course[], category: string): Course[] {

    return courses.filter(course => course.category === category);
  }

}
