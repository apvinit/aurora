import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/api/room.service';
import { Observable } from 'rxjs';
import { Room } from 'src/app/model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms: Room[];
  constructor(private roomService: RoomService) { }

  ngOnInit() {
    this.roomService.getRooms().subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });
  }

}
