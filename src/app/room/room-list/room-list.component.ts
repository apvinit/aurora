import { Component, OnInit, ViewChild } from '@angular/core';
import { RoomService } from 'src/app/api/room.service';
import { Room } from 'src/app/model/room';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  roomDataSource = new MatTableDataSource<Room>();
  columnsToDisplay = ['name', 'type', 'fees', 'isAlloted'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.roomDataSource.data = rooms;
      this.roomDataSource.paginator = this.paginator;
    });
  }

}
