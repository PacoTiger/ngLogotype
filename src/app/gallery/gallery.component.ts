import { Component, OnInit } from '@angular/core';

import { LogosService } from '../logos.service';

import { Logo } from '../Models/logo';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	logos: Logo[]

  constructor(private logosService: LogosService) { }

  ngOnInit() {
  	this.logos = this.logosService.getLogos(); 
  }

}
