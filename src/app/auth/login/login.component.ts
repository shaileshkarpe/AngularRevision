import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform!: FormGroup;
  constructor(private formBulder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginform = this.formBulder.group({
      email: [''],
      password: ['']
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password

      })
      if (user) {
        alert("Login Successfull");
        this.loginform.reset();
        this.router.navigate(['dashbord'])
      } else {
        alert("User Not Found !!")
      }

    }, err => [
      alert("Error occur")
    ])
  }

}

