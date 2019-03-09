import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
  {
    path: 'room',
    component: RoomComponent,
    children: [
      {
        path: '', component: RoomListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
