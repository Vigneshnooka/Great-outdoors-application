
import {Address} from './Address';
export class Customer{
        constructor(
            public customerId:number,
            public customerName:string, 
            public mobileNo:number,
            public email:string,
            public address:Address, 
            public role:string){           
        }
        
    }