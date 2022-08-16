import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShoppingcartService } from '../shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css'],
  providers: [ShoppingcartService]
})
export class MailerComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingcartService) { }

  ngOnInit() {
  }
  MailerForm = new FormGroup({
    emailId: new FormControl(''),
    subject: new FormControl(''),
    emailbody: new FormControl('')
  });


  onSubmit() {
    this.shoppingCartService.sendMail(this.MailerForm.get('emailId').value, this.MailerForm.get('subject').value, this.MailerForm.get('emailbody').value).then(
      res => {

      });
  }
}
