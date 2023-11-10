import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root"})
export class AppHttpService {
    constructor( private http: HttpClient){}

    url = "http://localhost:4000/users/";

    getUser(username: string){
        return this.http.get(`${this.url}${username}`);
    }

    addUser(use: string, requestBody: any){
        return this.http.post(`${this.url}`, requestBody);
    }
    

}