import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('subscriptionForm') subscriptionForm: NgForm;

  subscriptionData = {
    email: '',
    subscription: '',
    password: ''
  };

  subscriptionFormSubmitted = false;
  subscription = 'Advanced';

  onSubmit(subscriptionForm: NgForm) {
    this.subscriptionFormSubmitted = true;
    console.log(subscriptionForm);

    console.log(this.subscriptionForm.value.email);
    console.log(this.subscriptionForm.value.subscription);
    console.log(this.subscriptionForm.value.password);

    this.subscriptionData.email = this.subscriptionForm.value.email;
    this.subscriptionData.subscription = this.subscriptionForm.value.subscription;
    this.subscriptionData.password = this.subscriptionForm.value.password;
  }

}
