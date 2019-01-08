import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ServicesService } from '../../services.service';
import { Login } from './login';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  submitted = false;
 loginForm: FormGroup;
 pwdPattern: any;
 logindata: any;
 mobnumPattern: any;


  constructor( private formBuilder: FormBuilder, private servicesService: ServicesService, private router: Router) {

    this.loginForm = this.formBuilder.group({

      MobileNumber:  ['', Validators.required],
      PassWord:  ['', Validators.required],
    } );
   }
  ngOnInit() {
   
  }
  onSubmit() {
    this.servicesService.validateLogin(this.login).subscribe(
      data => {
        this.logindata = data;
        console.log(this.logindata.isSuccess);
        if (this.logindata.isSuccess) {
          this.router.navigate(['/News']);
        } else {
        alert('please enter correct details.');
        }
      },
      error => console.log(error)
    );
  }

}
