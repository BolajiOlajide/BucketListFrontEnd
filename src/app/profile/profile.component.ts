import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../toastr.service';
import { ApiService } from "app/api.service";
import { IBucketlist } from "app/bucketlist";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bucketlists: IBucketlist[];
  year: number;
  title:string = 'BucketList Application';
  username:string = window.sessionStorage.getItem('username');
  showProgressBar: boolean;
  bucketlistName: string;

  constructor(
    private _toastr: ToastrService,
    private _apiService: ApiService
  ) { }

  ngOnInit() {
    this.year = new Date().getFullYear();
    this.showProgressBar = true;
    this._apiService.getBucketLists().subscribe(
      data => {
        this.showProgressBar = false;
        this._toastr.success("Welcome to Proton's BucketList Application");
        this.bucketlists = data['bucketlists'];
      }
    );
  }

  logOut() {
    this._toastr.success("Logged Out");
  }

  createBucketList(){
    if (this.bucketlistName) {
      let body = {
        name: this.bucketlistName
      }

      this._apiService.createBucketList(body).subscribe(
        data => {
          this.ngOnInit();
        }
      );
    }
    this._toastr.success("Name field must not be empty");
  }
}
