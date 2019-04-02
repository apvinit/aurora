import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { MaterialModule } from '../material.module';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [StudentComponent, StudentListComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule
  ]
})
export class StudentModule { }
