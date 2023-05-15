import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExportService } from '../service/export.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
              private exportService: ExportService,
              private userService: UserService) { }

  userName: any;
  password: any;
  formGroup!:FormGroup;
  isSubmit = false;

  ngOnInit(): void {
    this.initForm();
    // set data for BehaviorSubject
    this.exportService.data.next([1,2,3,4,5,6]);
  }

  get f(){
    return this.formGroup.controls;
  }

  setLoginData(){
    this.isSubmit = true;
    const userData = this.userService.findUser(this._username?.value , this._password?.value);
    if (this.formGroup.status === 'VALID' && userData){
      localStorage.setItem('dataLogin',this._username?.value + this._password?.value);
      this.userService.userInfoData.next(userData);
      this.router.navigateByUrl('');
    }
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl(this.userName,[Validators.required]),
      password: new FormControl(this.password,[Validators.required])
    });
  }
  get _username(){
    return this.formGroup.get('username');
  }
  get _password(){
    return this.formGroup.get('password');
  }
}
