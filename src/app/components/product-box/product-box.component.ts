import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product.model';
@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html' ,
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit{
  @Input() fullwidthmode = false;
  product: Product | undefined ={
    id: 1,
    title: 'Amatista',
    price: 150,
    category: 'Morral',
    description: 'Description',
    image: 'https//via.placeholder.com/150'
  };
  @Output() addToCart =new EventEmitter();

  constructor(){}

  ngOnInit(): void {
      
  }
  onAddToCart(): void{
    this.addToCart.emit(this.product);
  }
}
