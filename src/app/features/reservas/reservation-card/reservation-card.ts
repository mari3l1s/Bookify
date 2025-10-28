import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-card',
  imports: [CommonModule],
  templateUrl: './reservation-card.html',
  styleUrl: './reservation-card.scss'
})
export class ReservationCard {
  @Input() reservation: any;
  @Output() cancel = new EventEmitter<string>();

  businessTypeLabels: any = {
    restaurant: 'Restaurante',
    hotel: 'Hotel',
    medical: 'Clínica Médica',
    salon: 'Salón de Belleza',
    spa: 'Spa'
  };

  statusLabels: any = {
    pending: 'Pendiente',
    confirmed: 'Confirmada',
    cancelled: 'Cancelada',
    completed: 'Completada'
  };

  statusColors: any = {
    pending: '#f59e0b',
    confirmed: '#22c55e',
    cancelled: '#ef4444',
    completed: '#9ca3af'
  };

  formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
