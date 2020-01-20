import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private data:DataService) { }
  private userdata
  run()
  {
   this.userdata=this.data.user;

  }
  

  ngOnInit() {
    this.run()
    

    
  }

}
