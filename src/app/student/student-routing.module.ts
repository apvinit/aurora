import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: 'students',
    component: StudentComponent,
    children: [
      {
        path: '', component: StudentListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
