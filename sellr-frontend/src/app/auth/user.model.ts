export class User {
    constructor(
        public username: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public birthDate: string,
        public phone: string,
        public country: string,
        public profileImg: string,
    ){}

    // get token() {
    //     if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
    //         return null;
    //     }
    //     return this._token;
    // }

//     {
//         "username": "anyany99",
//         "firstName": "any",
//         "lastName": "any",
//         "email": "anyany99@example.com",
//         "password": "Password12345!",
//         "birthDate": "any",
//         "phone": "any",
//         "country": "any",
//         "profileImg": "any"
//   }
}