import { Component } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngHouston-demo';
  candies$ = of(['Sour patch','Snikers','Twix','Skittles','KitKat','Butterfinger']);
  private list = []; 
  cartItems$ = new BehaviorSubject<string[]>([]);

  add(candy:string){
    this.list.push(candy)
    this.cartItems$.next(this.list)
  }
  remove(index){
    this.list.splice(index, 1);
    this.cartItems$.next(this.list)

  }
}
