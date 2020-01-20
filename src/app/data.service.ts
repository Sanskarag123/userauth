import { Injectable, Output, OnInit } from '@angular/core';
import{LoginComponent  } from '../app/login/login.component'
import {Observable, Subject, from} from 'rxjs'
import{Router} from '@angular/router'
import { emptyScheduled } from 'rxjs/internal/observable/empty';


@Injectable({
  providedIn: 'root'
})

export class DataService {
  
  credential$: Observable<any>
  public cred=new Subject<any>()
  constructor(private rou:Router) { 
    this.credential$=this.cred.asObservable();
  }
  fun(){if(!!localStorage.getItem('tfdhj'))
      {if(localStorage.getItem('tfdhj').slice(0,5)=='cBmn4')
      {
        this.usercode='cBmn4'
        console.log(this.usercode);
      this.index=localStorage.getItem('tfdhj')[5];
      this.user=this.userdata[this.index].username;
      }
      else
      {
        this.admincode=localStorage.getItem('tfdhj')
        
      }
      }}
  
  public usercode;
  public index;
  public admincode:any
  public user:any
  public login=false
  credential(data)
  {let i;
    
    
    this.cred.next(data)
    for(i=0;i<this.userdata.length;i++)
    {
      if(data.username==this.userdata[i].username && data.password==this.userdata[i].password && data.type=='user')
      { 
        
        this.usercode='cBmn4'
      this.index=i+'';
      
        this.user=this.userdata[i].username;
        
        this.rou.navigate(['user'])
        break;
      }
    
    
      if(data.username=='admin' && data.password=='admin' && data.type=='admin')
      { this.admincode='Kf96';
        this.rou.navigate(['admin'])
        break
      }
      else{
        return false
      }
    }
      
    
    
    
    console.log(data)
  
  }
  
 

  public userdata=[{'username':'abc','password':'abc'},{'username':'xyz','password':'123'}]


}
