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
          February 20, 2025<br>
          12:21 PM  
        </div>
        
        <div class="detail-item">
          <strong>Haldi Ceremonies</strong>
          February 19, 2025<br>
           07:00 PM onwards
        </div>
        
        <div class="detail-item">
          <strong>Venue</strong>
          Reshimgathi Sanskrutik Bhavan<br>
          Plot No-14, Vrindavan Villas Road, Spurti Chowk<br>
          Sangli, Maharashtra 
          <a href="https://maps.app.goo.gl/eD44A2jcQkpyN8Q49" 
             target="_blank" 
             class="venue-link">
            View on Google Maps
          </a>
        </div>
      </div>
      
      <button class="accept-btn" (click)="showThankYou()">
        Accept
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