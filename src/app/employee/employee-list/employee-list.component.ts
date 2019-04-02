import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/model/employee';
import { MatPaginator } from '@angular/material/paginator';
import { EmployeeService } from 'src/app/api/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeDataSource = new MatTableDataSource<Employee>();
  columnsToDisplay = ['name', 'department', 'role', 'salary'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees: Employee[]) => {
      this.employeeDataSource.data = employees;
      this.employeeDataSource.paginator = this.paginator;
    });
  }
}
