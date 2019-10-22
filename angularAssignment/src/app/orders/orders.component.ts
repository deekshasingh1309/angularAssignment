import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
data:any;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.data[0]; 
    console.log(this.data)
  }

  ngOnInit() {
  }
}
