import { NgModule, Input, OnChanges } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AdminComponent} from './admin/admin.component'
import {LoginComponent} from './login/login.component'
import {AuthGuard} from'./auth.guard'
import{UserComponent} from './user/user.component'
import { from } from 'rxjs';
import { DataService } from './data.service';


const routes: Routes = [{path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{roles:['Kf96']}},{path:'login',component:LoginComponent},{path:'user',component:UserComponent,canActivate:[AuthGuard],data:{roles:['cBmn4']}}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private data:DataService){}
  
}
