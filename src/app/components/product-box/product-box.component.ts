import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html' ,
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit{
  @Input() fullwidthmode = false;

  constructor(){}

  ngOnInit(): void {
      
  }

}
