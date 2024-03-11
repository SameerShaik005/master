import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-POC-components';
  
  jsonData:any = [
    {id: "1", type: "bus", make: "VW", color: "white"},
    {id: "2", type: "taxi", make: "BMW", color: "blue"}
  ];
  _object = Object;
}
