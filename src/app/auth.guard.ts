import { Injectable, Input } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable, from } from 'rxjs';
import{LoginComponent} from './login/login.component'
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
  
})
export class AuthGuard implements CanActivate {
  constructor(private data:DataService){}
  public credentials={'type':''}
  
  
 
  canActivate(route:ActivatedRouteSnapshot
    
    ): boolean {
      let data=route.data['roles']
      if(localStorage.getItem('tfdhj')==data)
      {
        return true;
      }
      
      if(this.data.usercode==data) {
        localStorage.setItem('tfdhj',this.data.usercode+this.data.index)
        
        

      return true;}

      else if(this.data.admincode==data)
      {localStorage.setItem('tfdhj',this.data.admincode)
        return true;
      }
      else
      return false
      


  }
  
}
