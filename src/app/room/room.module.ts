import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomComponent } from './room/room.component';
import { MaterialModule } from '../material.module';
import { RoomListComponent } from './room-list/room-list.component';

@NgModule({
  declarations: [RoomComponent, RoomListComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    MaterialModule
  ]
})
export class RoomModule { }
