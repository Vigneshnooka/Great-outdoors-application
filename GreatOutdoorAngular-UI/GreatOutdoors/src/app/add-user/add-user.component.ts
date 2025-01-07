import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddUserResponse } from './models/add-user-response';
import { User } from './models/user';
import { AddUserServiceService } from 'src/app/add-user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  user : User = new User(1,"","","");
  resp : any;
  anyError : any = false;
  errorMessage : any = "";
  constructor(private addUserService : AddUserServiceService,private router : Router) { }

  ngOnInit(): void {
  }

  public registerNow(){
    let resp = this.addUserService.doRegistration(this.user);
    resp.subscribe((data)=>{
      if(data.userDetails == null){
        console.log(data.message);
        this.anyError = true;
        this.errorMessage = data.message;
      }else{
        this.router.navigateByUrl('/welcome');
      }    
    });
  }

  public removeAlert(){

  }
}