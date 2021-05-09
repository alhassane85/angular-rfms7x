import { range } from 'rxjs';
import { count } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  name = 'Angular';
  numbers;result;
  ngOnInit() {
     // Called after the constructor and called  after the first ngOnChanges() 
     const numbers = range(1, 7);
const result = numbers.pipe(count(i => i % 2 === 1));
  result.subscribe(x => console.log(x));
  }



}
