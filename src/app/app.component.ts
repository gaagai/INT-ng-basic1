import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Hello world';
  isNewUser:boolean = true;
  animals:string[] = ['dog', 'cat', 'tiger', 'lion'];
  today: any = Date.now();
  price:number = 1304855;
}
