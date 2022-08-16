import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingcartService } from '../shoppingcart/shoppingcart.service';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService, ShoppingcartService]
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
    private shoppingcartService: ShoppingcartService,
    private route: ActivatedRoute,
  private router: Router) { }
  private productsList: Array<object> = [];
  isloggedIn: boolean = false;
  ngOnInit() {
    this.isloggedIn = localStorage.getItem('LoggedIn') == 'true';
    this.dashboardService.getProducts().then(
      res => {
        this.productsList = res
        console.log(res);
      })
  }

  addtocart(productId:number, userId:number) {

    console.log('added to cart');
    console.log(productId);
    console.log(userId);
    this.shoppingcartService.addToCart(productId, userId).then(
      cartResponse => {
        console.log(cartResponse);
        this.router.navigate(['/shoppingcart'], { relativeTo: this.route });
      }
    );
  }

}
