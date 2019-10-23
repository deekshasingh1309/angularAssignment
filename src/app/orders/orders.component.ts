import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
public data:any;
public type:any = 2;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.data[0]; 
    console.log(this.data)
  }

  ngOnInit() {
  }

  orderview(type:number){
    if (type == 1) {
      document.getElementById('custview').style.color = 'black';
      document.getElementById('orderview').style.color = '';
      this.type = 1; 
    }
    else{ 
      document.getElementById('custview').style.color = '';
      document.getElementById('orderview').style.color = 'black';
      this.type = 2;    
    }
}
  
}
