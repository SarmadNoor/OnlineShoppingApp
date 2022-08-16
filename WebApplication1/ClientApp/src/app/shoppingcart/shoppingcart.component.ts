import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from './shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css'],
  providers: [ShoppingcartService]
})
export class ShoppingcartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingcartService,
              private router: Router,
              private route: ActivatedRoute) { }
  private productsInCart: Array<object> = [];
  ngOnInit() {
    this.shoppingCartService.getItemsInCart(1).then(
      items => {
        this.productsInCart = items;
        console.log('Items in cart');
        console.log(this.productsInCart);
      }
    );
  }
  confirmOrder() {
    this.router.navigate(['/mailer'], { relativeTo: this.route });
  }

  

}
