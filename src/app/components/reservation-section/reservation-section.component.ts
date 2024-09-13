import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Reservation {
  name: string;
  email: string;
  dateTime: string;
  people: string;
  specialRequest: string;
}

@Component({
  selector: 'app-reservation-section',
  templateUrl: './reservation-section.component.html',
  styleUrls: ['./reservation-section.component.css']
})
export class ReservationSectionComponent {
  isVideoModalOpen = false;
  videoUrl = 'https://www.youtube.com/embed/DWRcNpR6Kdc';
  safeVideoUrl: SafeResourceUrl;

  reservation: Reservation = {
    name: '',
    email: '',
    dateTime: '',
    people: '',
    specialRequest: ''
  };

  peopleOptions: number[] = Array.from({length: 10}, (_, i) => i + 1);

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  onSubmit() {
    this.reservation = {
      name: '',
      email: '',
      dateTime: '',
      people: '',
      specialRequest: ''
    };
  }

  openVideoModal() {
    this.isVideoModalOpen = true;
  }

  closeVideoModal() {
    this.isVideoModalOpen = false;
  }
}
