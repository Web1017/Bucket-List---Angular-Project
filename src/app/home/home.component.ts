import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    itemCount: number;

    btnText: String = 'Add an Item';

    goalTxt: string = "My Initial Goal!";

    goals = [];

  constructor() { }

  ngOnInit() {

    this.itemCount = this.goals.length;
  }

  addItem() {

    this.goals.push(this.goalTxt);
    this.goalTxt = '';
    this.itemCount = this.goals.length;
  }

}
