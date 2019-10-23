import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  public users:Array<Object>;
  public displayType:any = 1;
  p: number = 1;
  
  viewType(type:any) {
    if (type == 1) { 
      this.displayType = 1; 
    }
    else if (type == 2) { 
      this.displayType = 2;    
    }
  }

  constructor(private ServerService: ServerService, private router: Router) { }

  ngOnInit() {
    this.getUser()
  }
  
  getUser(){
    this.ServerService.sendGetRequest().subscribe((data: any[]) => {
      this.users = data;      
    })
  }

  vieworder(id: number){
    console.log(id)
    const filteredUser = this.users.filter(item=>{
      return item['id'] === id;
    })
    console.log(filteredUser)
  this.router.navigate(['orders'], { state: { data: filteredUser } });
  }
}
