import { Component, OnInit } from "@angular/core";
import { NgForm} from '@angular/forms';


import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
  })

export class AuthComponent implements OnInit{

  selectedMonth: string = '1';
  selectedDay: string = '1';
  selectedYear: string = new Date().getFullYear().toString();

  months: { value: number; name: string }[] = [];
  days: number[] = [];
  years: number[] = [];

  constructor( private authService: AuthService ) {
    this.months = authService.months;
    this.days = authService.days;
    this.years = authService.years;
  }
    ngOnInit() {
        
    }
    onClickSignup(form: NgForm) {
      if(!form.valid){
        return
        
      }
      // console.log(form.value);
      const firstName = form.value.firstName;
      const lastName = form.value.lastName;
      const username = form.value.username;
      const email = form.value.email;
      const password = form.value.password;
      const birthDate = `${form.value.bDayYear}-${form.value.bDayMonth}-${form.value.bDay}`;


      this.authService.signup(firstName, lastName, username, email, password, birthDate)
      .subscribe((response) => {
        console.log('Signup Successful:', response);
        // console.log(response);
        // You can also navigate to a different page or perform other actions on success.
      },
      (error) => {
        // Handle the error, display a message to the user, or perform error-specific actions.
        console.error('Signup Unsuccessful:', error.error.message);
      }
    );


    }

}