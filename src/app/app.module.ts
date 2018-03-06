import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ArrayFormComponent } from './array-form/array-form.component';
import { ChangePassFormComponent } from './change-pass-form/change-pass-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CourseFormComponent,
    SignupFormComponent,
    ArrayFormComponent,
    ChangePassFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
