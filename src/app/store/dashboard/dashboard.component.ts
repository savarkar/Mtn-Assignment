import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  abc: any;
  userd: any;
  email: any;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.userd=JSON.stringify(localStorage.getItem("datas"));

console.log(this.userd, "dd");
  }
  logout(){
    this.router.navigateByUrl('/login')
  }

}
