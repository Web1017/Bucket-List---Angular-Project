import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})


export class AboutComponent implements OnInit {

  goals: any;
  
  constructor(private route: ActivatedRoute, private router: Router, private _data:DataService) {

    this.route.params.subscribe(res => console.log(res.id));

   }

  ngOnInit() {

    this._data.goal.subscribe(res => this.goals = res);
  }

  returnHome() {

    this.router.navigate(['']);
  }
}

