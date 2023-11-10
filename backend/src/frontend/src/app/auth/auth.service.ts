import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  months = [
    { value: 1, name: 'Jan' },
    { value: 2, name: 'Feb' },
    { value: 3, name: 'Mar' },
    { value: 4, name: 'Apr' },
    { value: 5, name: 'May' },
    { value: 6, name: 'Jun' },
    { value: 7, name: 'Jul' },
    { value: 8, name: 'Aug' },
    { value: 9, name: 'Sep' },
    { value: 10, name: 'Oct' },
    { value: 11, name: 'Nov' },
    { value: 12, name: 'Dec' }
  ];
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  years: number[] = Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => i + 1900).reverse();
  url = 'http://localhost:4000';

  signup(
    firstName: string, 
    lastName: string, 
    username: string, 
    email: string, 
    password: string,
    birthDate: string
  ) {
    console.log(birthDate);
    //set the content-type to json
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // Send the POST request and handle errors
    return this.http
      .post(`${this.url}/addUser`, {
        'username': username,
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password,
        'birthDate': birthDate,
        'phone': "",
        'country': "",
        'profileImg': ""
      }, { headers })
      .pipe(
        catchError(this.handleError) // Add the error handling logic
      );
  }

  // Error handler function
  private handleError(error: any) {
    // You can handle the error as needed, e.g., logging or showing an error message to the user
    // return error.message;
    
    // Rethrow the error or return a custom error message
    return throwError(error);
  }
}

