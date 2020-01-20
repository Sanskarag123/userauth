import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import{Router } from '@angular/router'
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
public  login=false;
  
  

 constructor(private route:Router,private data:DataService)
 {
  

 }
  title = 'authentication';
  ngOnInit()
  {
    

if(!!localStorage.getItem('tfdhj')){
  this.data.fun();
this.login=true;
if(localStorage.getItem('tfdhj').slice(0,5)=='cBmn4')
this.route.navigate(['user'])
else
this.route.navigate(['admin']);


  }
  else
  this.route.navigate(['login'])
}
  check()
  {
    if(!!localStorage.getItem('tfdhj'))
    {

      localStorage.removeItem('tfdhj')
      window.location.reload();
      
      
    }
  }
  
}
