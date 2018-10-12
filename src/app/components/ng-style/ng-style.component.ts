import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px]="tamano">
      Hola mundo... esto es html
    </p>
    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <fa-icon icon="plus"></fa-icon>
    </button>

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <fa-icon icon="minus"></fa-icon>
    </button>
  `,
  styleUrls: []
})
export class NgStyleComponent implements OnInit {
  tamano:number=20;
  constructor() { }

  ngOnInit() {
  }

}
