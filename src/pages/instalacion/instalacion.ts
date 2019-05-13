import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-instalacion',
  templateUrl: 'instalacion.html',
})
export class InstalacionPage {
  public slidePages = [
    { text: 'Slide 1', image: '../assets/imgs/futbol11-1-crop.jpg'},
    { text: 'Slide 2', image: '../assets/imgs/futbol11-2-crop.jpg'},
    { text: 'Slide 3', image: '../assets/imgs/futbol11-3-crop.jpg'},
  ];

  public slidesPages2 = [
    { text: 'Slide 1', image: '../assets/imgs/futbol11-1-crop.jpg' },
    { text: 'Slide 4', image: '../assets/imgs/futbol11-2-crop.jpg' },
    { text: 'Slide 3', image: '../assets/imgs/futbol11-3-crop.jpg' },
  ];

  public slidesPages3 = [
    { text: 'Slide 1', image: '../assets/imgs/futbols-1-crop.jpg' },
    { text: 'Slide 4', image: '../assets/imgs/futbols-2-crop.jpg' },
    { text: 'Slide 3', image: '../assets/imgs/futbols-3-crop.jpg' },
  ];

  public slidesPages4 = [
    { text: 'Slide 1', image: '../assets/imgs/futbolsala-1-crop.jpg' },
    { text: 'Slide 4', image: '../assets/imgs/futbolsala-2-crop.jpg' },
    { text: 'Slide 3', image: '../assets/imgs/futbolsala-3-crop.jpg' },
  ];

  public slidesPages5 = [
    { text: 'Slide 1', image: '../assets/imgs/canasta-crop.jpg' },
    { text: 'Slide 4', image: '../assets/imgs/canasta-crop2.jpg' },
    { text: 'Slide 3', image: '../assets/imgs/canasta-crop3.jpg' },
  ];

  @ViewChild(Slides) private slides: Slides;

  constructor(public navController: NavController) {

  }

  public ngOnInit() {
    this.slides.effect = 'coverflow';
    this.slides.centeredSlides = true;
    this.slides.slidesPerView = 2;
    this.slides.spaceBetween = 15;


    // this.slides.coverflow = {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 50,
    //   modifier: 1,
    //   slideShadows: false,
    // }
  }
}
