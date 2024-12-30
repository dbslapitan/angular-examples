import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {CoursesModule} from './courses/courses.module';
import {FilterCategoryPipe} from './courses/filter-category.pipe';

@NgModule({ declarations: [
        AppComponent,
        HighlightedDirective,
        NgxUnlessDirective
    ],
    bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoursesModule,
    FilterCategoryPipe
  ],
    providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
