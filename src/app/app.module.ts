import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterializeModule } from 'angular2-materialize';
import { ProfileComponent } from './profile/profile.component';
import { BucketlistDetailComponent } from './bucketlist-detail/bucketlist-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiService } from "app/api.service";
import { AuthGuardService } from "app/auth-guard.service";
import { ToastrService } from "app/toastr.service";
import { BucketlistGuardService } from "app/bucketlist-guard.service";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },
  { path: 'homepage', component: HomepageComponent },
  { path: 'bucketlist', component: ProfileComponent },
  { path: 'bucketlist/:id', component: BucketlistDetailComponent },
  { path: '**', component: PagenotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    BucketlistDetailComponent,
    PagenotfoundComponent,
    HomepageComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService, AuthGuardService, ToastrService, BucketlistGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
