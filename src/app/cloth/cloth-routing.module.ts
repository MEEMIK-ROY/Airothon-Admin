import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllClothComponent } from './all-cloth/all-cloth.component';
import { ClothDetailsComponent } from './cloth-details/cloth-details.component';
import { ClothComponent } from './cloth.component';
import { CreateClothComponent } from './create-cloth/create-cloth.component';


const routes: Routes = [
  {
    path: '',
    component : ClothComponent,
    data : {
      title : 'cloth'
    },
    children : [
      {
        path : '',
        component : AllClothComponent,
        data : {
          title : 'All Cloth',
        },
      },
      {
        path : 'create',
        component : CreateClothComponent,
        data : {
          title : 'Create',
        },
      },
      {
        path : 'edit/:id',
        component : CreateClothComponent,
        data : {
          title : 'Edit',
        },
      },
      
      {
        path: 'details/:id',
        component: ClothDetailsComponent,
        data:{
          title:'Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothRoutingModule { }
