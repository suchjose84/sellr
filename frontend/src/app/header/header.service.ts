import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {
    constructor(private http: HttpClient){}

    // private username = 'suchjose84';

    getUser(username: string){
        return this.http.get(`https://sellr-backend.onrender.com/users/${username}`);
        // return this.http.get(`http://localhost/4000/users/${username}`);
    }

}