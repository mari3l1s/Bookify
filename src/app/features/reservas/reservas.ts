import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/components/navbar/navbar';
import { ReservationCard } from './reservation-card/reservation-card';

interface Reservation {
  id: string;
  userId: string;
  businessName: string;
  businessType: string;
  status: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

@Component({
  selector: 'app-reservas',
  imports: [Navbar, CommonModule, ReservationCard],
  templateUrl: './reservas.html',
  styleUrl: './reservas.scss'
})
export class Reservas {
  reservations: Reservation[] = [
    {
      id: '1',
      userId: 'user-1',
      businessName: 'Hotel Caribe Deluxe',
      businessType: 'hotel',
      status: 'confirmed',
      date: '2025-11-02',
      time: '14:00',
      guests: 2,
      notes: 'Habitación con vista al mar'
    },
    {
      id: '2',
      userId: 'user-1',
      businessName: 'Spa Relax Center',
      businessType: 'spa',
      status: 'pending',
      date: '2025-11-10',
      time: '11:00',
      guests: 1
    }
  ];

  get userReservations() {
    return this.reservations.filter(r => r.userId === 'user-1');
  }

  get upcomingReservations() {
    return this.userReservations.filter(r =>
      r.status === 'pending' || r.status === 'confirmed'
    );
  }

  get pastReservations() {
    return this.userReservations.filter(r =>
      r.status === 'cancelled' || r.status === 'completed'
    );
  }

  cancelReservation(id: string) {
    const reservation = this.reservations.find(r => r.id === id);
    if (reservation) reservation.status = 'cancelled';
    alert('Reservación cancelada');
  }
}
