import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class BucketlistGuardService {

  constructor(private _router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean { 
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid Bucketlist ID");
      //start a new navigation to redirect to list page
      this._router.navigate(['/profile']);
      //abort current navigation
      return false;
    }
    return true;
  }

}
