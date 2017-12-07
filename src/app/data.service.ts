import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['Travel the world', 'Become an artist']);
  goal = this.goals.asObservable();



  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }

}
