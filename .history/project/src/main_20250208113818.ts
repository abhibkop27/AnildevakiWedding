import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wedding-card">
      <h1 class="title">Wedding Invitation</h1>
      
      <div class="names">
        Anil & Pradnya
      </div>
      
      <p class="invitation-text">
        With the blessings of our families<br>
        We cordially invite you to celebrate<br>
        The auspicious occasion of our wedding
      </p>
      
      <div class="details">
        <div class="detail-item">
          <strong>Muhurtham</strong>
          November 21st, 2024<br>
          9:15 AM - 10:45 AM
        </div>
        
        <div class="detail-item">
          <strong>Pre-Wedding Ceremonies</strong>
          November 20th, 2024<br>
          Mehendi & Sangeet: 4:00 PM onwards
        </div>
        
        <div class="detail-item">
          <strong>Venue</strong>
          Taj Palace Banquet Hall<br>
          123 Wedding Avenue<br>
          Mumbai, Maharashtra 400001
          <a href="https://maps.google.com/?q=Taj+Palace+Banquet+Hall+Mumbai" 
             target="_blank" 
             class="venue-link">
            View on Google Maps
          </a>
        </div>
      </div>
      
      <button class="accept-btn" (click)="showThankYou()">
        RSVP
      </button>
    </div>

    <div class="modal-overlay" *ngIf="isThankYouVisible" (click)="hideThankYou()">
      <div class="thank-you-modal" (click)="$event.stopPropagation()">
        <h2 class="modal-title">Dhanyavaad!</h2>
        <p class="modal-text">Thank you for accepting our invitation. Your presence at our wedding ceremony will make our special day even more memorable. We look forward to celebrating with you!</p>
        <button class="accept-btn" (click)="hideThankYou()">Close</button>
      </div>
    </div>
  `,
})
export class App {
  isThankYouVisible = false;

  showThankYou() {
    this.isThankYouVisible = true;
  }

  hideThankYou() {
    this.isThankYouVisible = false;
  }
}

bootstrapApplication(App);