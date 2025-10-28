import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Business {
  name: string;
  type: string;
  image: string;
  rating: number;
  description: string;
  address: string;
  openingHours: string;
  phone: string;
  amenities: string[];
}

@Component({
  selector: 'app-business-card',
  imports: [CommonModule],
  templateUrl: './business-card.html',
  styleUrl: './business-card.scss'
})

export class BusinessCard {
@Input() business!: Business;
@Output() viewDetails = new EventEmitter<Business>();

businessTypeLabels: Record<string, string> = {
  restaurant: 'Restaurante',
  hotel: 'Hotel',
  medical: 'Clínica Médica',
  salon: 'Salón de Belleza',
  spa: 'Spa & Wellness'
};

businessTypeColors: Record<string, string> = {
  restaurant: 'orange',
  hotel: 'blue',
  medical: 'green',
  salon: 'pink',
  spa: 'teal'
};

onViewDetailsClick() {
  this.viewDetails.emit(this.business);
}
}
