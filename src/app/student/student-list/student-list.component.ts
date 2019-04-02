import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/model/student';
import { MatPaginator } from '@angular/material/paginator';
import { StudentService } from 'src/app/api/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentDataSource = new MatTableDataSource<Student>();
  columnsToDisplay = ['name', 'fatherName', 'instituteName', 'roomNo'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe((students: Student[]) => {
        this.studentDataSource.data = students;
        this.studentDataSource.paginator = this.paginator;
      });
  }

}
