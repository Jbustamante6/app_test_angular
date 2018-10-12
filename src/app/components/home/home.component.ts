import { Component, OnInit, OnChanges, DoCheck, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style> 
    <hr>
    <app-css></app-css>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus corporis, autem iste magnam dignissimos in quod placeat esse. Eius cumque fuga sunt neque provident nobis laborum a minus rerum?
    </p>
    <hr>
    <app-clases></app-clases>
    <p [appResaltado]="'orange'">
      Hola mundo
    </p>
    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {

  constructor() {
    console.log("Constructor")
   }

  ngOnInit() {
    console.log("ngOnInit");
  }


  ngOnChanges() {
    console.log("ngOnChanges");
  }

  ngDoCheck() {
    console.log("ngDoCheck");    
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy() {
    console.log("ngOnDestroy")
  }
  

}
