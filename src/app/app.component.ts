import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('subscriptionForm', {static: false}) subscriptionForm: NgForm;
  subscriptionData = {
    email: '',
    subscription: '',
    password: ''
  };
  subscriptionFormSubmitted = false;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  onSubmit() {
    this.subscriptionFormSubmitted = true;

    console.log(this.subscriptionForm.value);

    this.subscriptionData.email = this.subscriptionForm.value.email;
    this.subscriptionData.subscription = this.subscriptionForm.value.subscription;
    this.subscriptionData.password = this.subscriptionForm.value.password;
  }

}
