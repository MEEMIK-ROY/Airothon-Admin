import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { AllCategoryComponent } from './all-category/all-category.component';


import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    CategoryComponent,
    AllCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MdbModalModule
  ]
})
export class CategoryModule { }
