import { Component, OnInit } from '@angular/core';


import { User } from '../shared/user.model';
import { AppHttpService } from '../app-http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  userEmail: string = "";


  constructor(private appHttpService: AppHttpService){}

  ngOnInit(){
    this.fetchUser('suchjose84');
    
  }
  fetchUser(username: string) {
    this.appHttpService.getUser(username).subscribe(
      (user) => {
        this.userEmail = (user as User).email;
      },
      (error) => {
        console.error('Error fetching user', error);
      }
    )
  }

}
