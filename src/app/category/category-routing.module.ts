import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCategoryComponent } from './all-category/all-category.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: '',
    component : CategoryComponent,
    data : {
      title : 'category'
    },
    children : [
      {
        path : '',
        component : AllCategoryComponent,
        data : {
          title : 'All Category',
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
