import { Component } from '@angular/core';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngHouston-demo';
  candies$: Observable<string[]> = of(['Sour patch','Snikers','Twix','Skittles','KitKat','Butterfinger']);
  list: string[] = [];

  add(candy:string){
    this.list.push(candy)
  }
  remove(index){
    this.list.splice(index, 1);
  }
}
