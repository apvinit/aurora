import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
