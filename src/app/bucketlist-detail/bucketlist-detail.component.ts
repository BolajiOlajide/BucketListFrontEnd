import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from "app/api.service";
import { IBucketlist } from "app/bucketlist";
import { IItem } from "app/item";
import { ToastrService } from "app/toastr.service";

@Component({
  selector: 'app-bucketlist-detail',
  templateUrl: './bucketlist-detail.component.html',
  styleUrls: ['./bucketlist-detail.component.css']
})
export class BucketlistDetailComponent implements OnInit {

  pageTitle: string = 'BucketList Application';
  bucketlist: IBucketlist;
  id: number;
  showProgressBar: boolean;
  bucketlistName: string;
  items: IItem[];
  date_created: Date;
  date_modified: Date;

  constructor ( private _route: ActivatedRoute, 
                private _router: Router,
                private _apiService: ApiService,
                private _toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.id = +this._route.snapshot.params['id'];
    // this.pageTitle += `:${this.id}`;
    this.showProgressBar = true;

    this._apiService.getBucketList(this.id).subscribe(
      data => {
        this.showProgressBar = false;
        this.bucketlist = data;
        this.bucketlistName = this.bucketlist.name;
        this.items = this.bucketlist.items;
        this.date_created = this.bucketlist.date_created;
        this.date_modified = this.bucketlist.date_modified;
      }
    );
  }

  deleteBucketList():void {
    this._apiService.deleteBucketList(this.id).subscribe(
      data => {
        this._toastr.success("BucketList Successfully Deleted");
        this._router.navigate(['/bucketlist'])
      }
    );
  }

  deleteBucketListItem(itemId):void {
    this._apiService.deleteBucketListItem(this.id, itemId).subscribe(
      data => {
        this._toastr.success("BucketList Item Successfully Deleted");
        this.ngOnInit();
      }
    );
  }

  onBack(): void {
    this._router.navigate(['/bucketlist'])
  }

}
