import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  private myBehaviorSubject = new BehaviorSubject<any>(1);

  constructor() { }

  setValue(value: string) {
    this.myBehaviorSubject.next(value);
  }

  getValue() {
    return this.myBehaviorSubject.asObservable();
  }
}
