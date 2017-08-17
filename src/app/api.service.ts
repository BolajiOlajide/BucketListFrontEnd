import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IBucketlist } from "app/bucketlist";

@Injectable()
export class ApiService {

  private _bucketlistapiURL = 'http://localhost:5000'

  constructor(private _http: Http) { }

  filterBucketList(data): IBucketlist[] {
    console.log("Filtering Response!");
    let filteredData = data['bucketlists'];
    return filteredData;
  }

  createBucketList(body: Object) {
    let token = window.sessionStorage.getItem('token');
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Authorization': "Basic " + btoa(token + ":"),
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      });
    let options = new RequestOptions({
      headers: headers,
      method: 'POST',
      body: body,
      withCredentials: true
    });

    return this._http.post(`${this._bucketlistapiURL}/api/v1/bucketlists`, body, options)
      .map((res: Response) => res.json())
      .do(data => window.sessionStorage.setItem('token', data['token']))
      .catch(this.handleError);
  }

  deleteBucketListItem(bucketlist_id, item_id) {
    let token = window.sessionStorage.getItem('token');
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Authorization': "Basic " + btoa(token + ":"),
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      });
    let options = new RequestOptions({
      headers: headers,
      method: 'GET',
      withCredentials: true,
    });

    return this._http.delete(`${this._bucketlistapiURL}/api/v1/bucketlists/${bucketlist_id}/items/${item_id}`, options)
      .map((response: Response) => <IBucketlist> response.json())
      .catch(this.handleError);
  }

  deleteBucketList(id): Observable<IBucketlist> {
    let token = window.sessionStorage.getItem('token');
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Authorization': "Basic " + btoa(token + ":"),
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      });
    let options = new RequestOptions({
      headers: headers,
      method: 'GET',
      withCredentials: true,
    });

    return this._http.delete(`${this._bucketlistapiURL}/api/v1/bucketlists/${id}`, options)
      .map((response: Response) => <IBucketlist> response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  getBucketList(id): Observable<IBucketlist> {
    let token = window.sessionStorage.getItem('token');
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Authorization': "Basic " + btoa(token + ":"),
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      });
    let options = new RequestOptions({
      headers: headers,
      method: 'GET',
      withCredentials: true,
    });

    return this._http.get(`${this._bucketlistapiURL}/api/v1/bucketlists/${id}`, options)
      .map((response: Response) => <IBucketlist> response.json())
      .catch(this.handleError);
  }

  getBucketLists(): Observable<IBucketlist[]> {
    let token = window.sessionStorage.getItem('token');
    let headers = new Headers({ 
      'Content-Type': 'application/json', 
      'Authorization': "Basic " + btoa(token + ":"),
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
      });
    let options = new RequestOptions({
      headers: headers,
      method: 'GET',
      withCredentials: true,
    });

    return this._http.get(`${this._bucketlistapiURL}/api/v1/bucketlists/`, options)
      .map((response: Response) => <IBucketlist[]> response.json())
      .catch(this.handleError);
   }

  signUp(body: Object): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers,
      method: 'POST',
      body: body,
      withCredentials: false
    });
    
    return this._http.post(`${this._bucketlistapiURL}/auth/register`, body, options)
      .map((res: Response) => res.json())
      .do(data => window.sessionStorage.setItem('token', data['token']))
      .catch(this.handleError);
  }

  login(body: Object): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({
      headers: headers,
      method: 'POST',
      body: body,
      withCredentials: false
    });
    
    return this._http.post(`${this._bucketlistapiURL}/auth/login`, body, options)
      .map((res: Response) => res.json())
      .do(data => window.sessionStorage.setItem('token', data['token']))
      .do(data => window.sessionStorage.setItem('username', body['username']))
      .catch(this.handleError);
  }

    private handleError(error: Response): any {
      return Observable.throw(error.json().error || 'Server Error');
    }

}

