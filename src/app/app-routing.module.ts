import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from "./services/auth.guard";

import {P404Component} from './views/p404/p404.component'
import {P500Component} from './views/p500/p500.component'
import { LoginComponent } from "./views/login/login.component";

import { MainComponent } from "./main/main.component";
import { ClothComponent } from "./cloth/cloth.component";

const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component:MainComponent,
    data: {
      title: 'main'
    },
    canActivate : [AuthGuard],
    children:[
      {
        path:'cloth',
        component:ClothComponent,
        loadChildren:()=>import('./cloth/cloth.module').then(m=>m.ClothModule)
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/cloth'
      }
  //     {
  //       path : 'dashboard',
  //       component:DashboardComponent,
  //       loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  //     },
  //     {
  //       path: 'quiz',
  //       loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
  //     },
  //     {
  //       path: 'calendar',
  //       component:CalendarComponent,
  //       loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule)
  //     },
  //     {
  //       path:'wallet',
  //       component:WalletComponent,
  //       loadChildren:()=> import('./wallet/wallet.module').then(m=>m.WalletModule)
  //     }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
