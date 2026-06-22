import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Trip } from '../trip';
import { TripData } from '../trip-data';

@Component({
  selector: 'app-trip-list',
  standalone: false,
  templateUrl: './trip-list.html',
  styleUrl: './trip-list.css'
})
export class TripList implements OnInit {
  trips: Trip[] = [];
  selectedTrip: Trip | null = null;
  newTrip: Trip = {
  code: 'TEST260101',
  name: 'Test Reef',
  length: '4 nights / 5 days',
  start: '2026-01-01T00:00:00.000Z',
  resort: 'Test Resort, 4 stars',
  perPerson: '$999.00',
  image: '/images/reef1.jpg',
  description: 'A new test trip added from the Angular admin SPA.'
};

  constructor(private tripData: TripData, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
  this.tripData.getTrips().subscribe({
    next: (trips) => {
      this.trips = trips;
      this.cdr.detectChanges();
    },
    error: (err) => {
      alert('Error loading trips');
      console.error('Error loading trips:', err);
    }
  });
}

  editTrip(trip: Trip): void {
    this.selectedTrip = { ...trip };
  }

  saveTrip(): void {
    if (!this.selectedTrip) {
      return;
    }

    this.tripData.updateTrip(this.selectedTrip).subscribe({
      next: () => {
        this.selectedTrip = null;
        this.loadTrips();
      },
      error: (err) => console.error('Error updating trip:', err)
    });
  }
addTrip(): void {
  this.tripData.addTrip(this.newTrip).subscribe({
    next: () => {
      this.loadTrips();
    },
    error: (err) => console.error('Error adding trip:', err)
  });
}
deleteTrip(trip: Trip): void {
  if (!trip._id) {
    return;
  }

  this.tripData.deleteTrip(trip._id).subscribe({
    next: () => {
      this.loadTrips();
    },
    error: (err) => console.error('Error deleting trip:', err)
  });
}
  cancelEdit(): void {
    this.selectedTrip = null;
  }
}