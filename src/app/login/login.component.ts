import { Component, OnInit, Output ,OnChanges, Input, SimpleChange, SimpleChanges} from '@angular/core';
import{DataService} from '../data.service'
import{EventEmitter} from '@angular/core'
import { Observable } from 'rxjs';
import { AuthGuard } from '../auth.guard';
import { RouterModule } from '@angular/router';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnChanges {

  constructor(private data:DataService) { }
  public credentials={'username':'','password':'','type':'admin'}
 
 public admin1:boolean=false

  
@Input() log:boolean=true

  
public change=false;
  ngOnInit() {
  if(this.data.login){
  this.log=true
  }
    
  }
  ngOnChanges(change:SimpleChanges)
  {
    console.log(change)
  }
  adminlogin()
  {
    this.credentials.type="admin";
    this.change=false;
    this.log=true
  }
  userlogin()
  {
    this.credentials.type="user";
    this.change=true;
    this.log=true
  }
  login()
  {
   this.log=this.data.credential(this.credentials);
   
   return true;
  }
  onEnter()
  {
    this.login()
  }


 

}
