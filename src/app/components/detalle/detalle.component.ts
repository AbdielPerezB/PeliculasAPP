import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {

  @Input() id!: number;

  constructor() { }

  ngOnInit() {
    console.log(this.id);
  }

}
