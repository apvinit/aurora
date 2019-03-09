import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {
    path: 'room', component: RoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
