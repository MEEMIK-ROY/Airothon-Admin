import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {P404Component} from './views/p404/p404.component'
import {P500Component} from './views/p500/p500.component'
import { LoginComponent } from "./views/login/login.component";

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
  }
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   data: {
  //     title: 'Sign Up Page'
  //   }
  // },
  // {
  //   path: '',
  //   component:MainComponent,
  //   data: {
  //     title: 'main'
  //   },
  //   canActivate : [AuthGuard],
  //   children:[
  //     {
  //       path:'',
  //       component:MainComponent,
  //       pathMatch:'full',
  //       redirectTo:'/dashboard',
  //       data:{
  //         title:'main'
  //       }
  //     },
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
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
