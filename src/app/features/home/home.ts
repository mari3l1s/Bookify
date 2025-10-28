import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterLink } from "@angular/router";
import { BusinessCard } from "../../shared/components/business-card/business-card";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Navbar, RouterLink, BusinessCard],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {

  businesses = [
    {
      name: 'Hotel Paraíso',
      type: 'hotel',
      image: 'https://i.pinimg.com/736x/34/88/1f/34881ff7760d10e8e7c624034c8c5ee8.jpg',
      rating: 4.7,
      description: 'Un lugar de ensueño frente al mar.',
      address: 'Calle Coral 123, Santo Domingo',
      openingHours: '24 horas',
      phone: '809-555-1234',
      amenities: ['Piscina', 'WiFi', 'Restaurante']
    },
    {
      name: 'Restaurante El Sabor',
      type: 'restaurant',
      image: 'https://i.pinimg.com/736x/97/10/d9/9710d94387551642d163590150978d44.jpg',
      rating: 4.5,
      description: 'Comida típica con el mejor sazón del Caribe.',
      address: 'Av. Independencia 89',
      openingHours: '11:00 AM - 10:00 PM',
      phone: '809-555-9876',
      amenities: ['Parqueo', 'WiFi', 'Terraza']
    },
    {
      name: 'Spa Serenidad',
      type: 'spa',
      image: 'https://i.pinimg.com/1200x/72/d3/85/72d38510f2ba66be816f98148e1b9957.jpg',
      rating: 4.9,
      description: 'Relájate y renueva cuerpo y mente.',
      address: 'Calle Primavera 55',
      openingHours: '9:00 AM - 8:00 PM',
      phone: '809-555-4567',
      amenities: ['Masajes', 'Jacuzzi', 'Sauna']
    },
    {
      name: 'Hotel Paraíso',
      type: 'hotel',
      image: 'https://i.pinimg.com/736x/84/1d/7f/841d7f5b12e5ace78b271041aca3649b.jpg',
      rating: 4.7,
      description: 'Un lugar de ensueño frente al mar.',
      address: 'Calle Coral 123, Santo Domingo',
      openingHours: '24 horas',
      phone: '809-555-1234',
      amenities: ['Piscina', 'WiFi', 'Restaurante']
    },
    {
      name: 'Restaurante El Sabor',
      type: 'restaurant',
      image: '/assets/images/restaurant.jpg',
      rating: 4.5,
      description: 'Comida típica con el mejor sazón del Caribe.',
      address: 'Av. Independencia 89',
      openingHours: '11:00 AM - 10:00 PM',
      phone: '809-555-9876',
      amenities: ['Parqueo', 'WiFi', 'Terraza']
    },
    {
      name: 'Spa Serenidad',
      type: 'spa',
      image: '/assets/images/spa.jpg',
      rating: 4.9,
      description: 'Relájate y renueva cuerpo y mente.',
      address: 'Calle Primavera 55',
      openingHours: '9:00 AM - 8:00 PM',
      phone: '809-555-4567',
      amenities: ['Masajes', 'Jacuzzi', 'Sauna']
    },
    {
      name: 'Hotel Paraíso',
      type: 'hotel',
      image: '/assets/images/hotel.jpg',
      rating: 4.7,
      description: 'Un lugar de ensueño frente al mar.',
      address: 'Calle Coral 123, Santo Domingo',
      openingHours: '24 horas',
      phone: '809-555-1234',
      amenities: ['Piscina', 'WiFi', 'Restaurante']
    },
    {
      name: 'Restaurante El Sabor',
      type: 'restaurant',
      image: '/assets/images/restaurant.jpg',
      rating: 4.5,
      description: 'Comida típica con el mejor sazón del Caribe.',
      address: 'Av. Independencia 89',
      openingHours: '11:00 AM - 10:00 PM',
      phone: '809-555-9876',
      amenities: ['Parqueo', 'WiFi', 'Terraza']
    },
    {
      name: 'Spa Serenidad',
      type: 'spa',
      image: '/assets/images/spa.jpg',
      rating: 4.9,
      description: 'Relájate y renueva cuerpo y mente.',
      address: 'Calle Primavera 55',
      openingHours: '9:00 AM - 8:00 PM',
      phone: '809-555-4567',
      amenities: ['Masajes', 'Jacuzzi', 'Sauna']
    }
  ];

  
  verDetalles(business: any) {
    console.log('Detalles del negocio:', business);
  }
}
