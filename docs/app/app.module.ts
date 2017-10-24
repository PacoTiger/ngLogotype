import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogosService } from './logos.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GalleryComponent } from './gallery/gallery.component';

const appRoutes: Routes = [
  { path: '/nav', component: NavBarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [LogosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

