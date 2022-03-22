import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ClothComponent } from './cloth.component';
import { AllClothComponent } from './all-cloth/all-cloth.component';
import { CreateClothComponent } from './create-cloth/create-cloth.component';
import { ClothDetailsComponent } from './cloth-details/cloth-details.component';
import { ClothRoutingModule } from './cloth-routing.module';

import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ClothComponent,
    AllClothComponent,
    CreateClothComponent,
    ClothDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClothRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ClothModule { }
