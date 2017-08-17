import { Component } from '@angular/core';
import { ApiService } from "app/api.service";
import { Router } from '@angular/router';
import { ToastrService } from '../toastr.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  errorMessage: string;
  username: string;
  password: string;


  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  login() {
    console.log("Logging In");
    let body = {
      username: this.username, 
      password: this.password
    }

    this._apiService.login(body).subscribe(
      data => {
        if (window.sessionStorage.getItem('token')) {
          this._toastr.success('Welcome to the BucketList Application');
          this._router.navigate(['/bucketlist']);
        }
      }
    );
  }

  signUp() {
    this._toastr.success('success');
    // console.log("Registering the User");
    // let body = {
    //   username: this.username, 
    //   password: this.password
    // }

    // this._apiService.signUp(body).subscribe(
    //   data => {
    //     console.log('Successful Registering');
    //     this._router.navigate(['/profile']);

    //   }
    // );

  }
}
