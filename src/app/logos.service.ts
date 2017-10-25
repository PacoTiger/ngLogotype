import { Injectable } from '@angular/core';

import { Logo } from './Models/logo';

@Injectable()
export class LogosService {
	logos: Logo[] = [
				new Logo ('1',
  					 'Materialize', 
  					 'CSS Framework', 
  					 './assets/materialize.png'),
				new Logo ('2',
		             'Bootstrap', 
		             'CSS Framework', 
		             './assets/bootstrap.png'),
		        new Logo ('3',
		             'Cascading Style Sheets (CSS)', 
		             'Style Sheet Language', 
		             './assets/css.png'),
		        new Logo ('4',
		             'Git', 
		             'Version control system', 
		             './assets/git.png'),
		        new Logo ('5',
		             'HTML5', 
		             'Hypertext Markup Language', 
		             './assets/html5.png'),
		        new Logo ('6',
		             'JavaScript', 
		             'A High-level, dynamic, weakly typed, object-based, multi-paradigm and interpreted programming language.', 
		             './assets/javascript.png'),
		        new Logo ('7',
		             'jQuery', 
		             'JavaScript library', 
		             './assets/jquery.png'),
		        new Logo ('8',
		             'SASS', 
		             'Syntactically Awesome Stylesheets (SASS) is a style sheet language', 
		             './assets/sass.png'),
		        new Logo ('9',
		             'Angular', 
		             'Javascript framework', 
		             './assets/angular.png'),
		        new Logo ('10',
		             'Laravel', 
		             'PHP web framework', 
		             './assets/laravel-logo.png'),
	];

  constructor() { }

  getLogos() {
        return this.logos;
      }

}
