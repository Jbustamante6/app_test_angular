import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alerta:string = 'alert-danger';
  loading: boolean = false;
  iconname: string='save';
  propiedades: Object={
    danger:true
  }
  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading=true;
    this.iconname='sync-alt';
    setTimeout(()=> {this.loading=false; this.iconname="save"}, 3000);
  }


}
