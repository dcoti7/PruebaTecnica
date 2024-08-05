import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  isModalOpen = false;
  isEditMode = false;
  selectedUser: any = {};

  usuarios = [
    { nombre: 'Lindsay Walton', email: 'lindsay.walton@example.com', Titulo: "Front-end Developer", Titulo2: "Optimization", Role: 'Member'},
    { nombre: 'Courtney Henry', email: 'courtney.henry@example.com', Titulo: "Designer", Titulo2: "Intranet", Role: 'Admin' },
    { nombre: 'Tom Cook', email: 'tom.cook@example.com', Titulo: "Director of Product", Titulo2: "Directives", Role: 'Member'},
    { nombre: 'Whitney Francis', email: 'whitney.francis@example.com', Titulo: "Copywriter", Titulo2: "Program", Role: 'Admin' },
    { nombre: 'Leonard Krasner', email: 'leonard.krasner@example.com', Titulo: "Seniro Designer", Titulo2: "Mobility", Role: 'Owner' },
    { nombre: 'Floyd Miles', email: 'floyd.miles@example.com', Titulo: "Principal Designer", Titulo2: "Security", Role: 'Member'},
  ];

  openModal(isEditMode: boolean, user?: any) {
    this.isEditMode = isEditMode;
    this.selectedUser = user ? { ...user } : {};
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
