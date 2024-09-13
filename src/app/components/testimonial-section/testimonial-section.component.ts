import { Component, OnInit, OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  id: number;
  content: string;
  clientName: string;
  profession: string;
  imageUrl: string;
}

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.css']
})
export class TestimonialSectionComponent {

  quoteIcon = faQuoteLeft;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    center: true,
    touchDrag: false,
    margin: 15,
    pullDrag: false,
    dots: true,
    navSpeed: 1500,
    autoplaySpeed: 1500,
    dotsSpeed: 1100,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  reviews = [
    { name: "Client Name", jobTitle: "Professor", picture: "https://themewagon.github.io/restoran/img/testimonial-1.jpg" },
    { name: "Another Client", jobTitle: "Designer",  picture: "https://themewagon.github.io/restoran/img/testimonial-2.jpg" },
    { name: "Gennaro Bullo", jobTitle: "Allenatore Pokémon",  picture: "https://themewagon.github.io/restoran/img/testimonial-3.jpg" },
    { name: "Fiammetta", jobTitle: "Capopalestra",  picture: "https://themewagon.github.io/restoran/img/testimonial-4.jpg"}
  ]

  trackByName(index: number, item: any): any {
    return item.name;
  }

  trackByFn(index: number, item: any): any {
    return item.name;
  }
}