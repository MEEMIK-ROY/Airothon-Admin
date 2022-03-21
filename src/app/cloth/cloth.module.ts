import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ClothComponent } from './cloth.component';
import { AllClothComponent } from './all-cloth/all-cloth.component';
import { CreateClothComponent } from './create-cloth/create-cloth.component';
import { ClothDetailsComponent } from './cloth-details/cloth-details.component';
import { ClothRoutingModule } from './cloth-routing.module';



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
    ClothRoutingModule
  ]
})
export class ClothModule { }
