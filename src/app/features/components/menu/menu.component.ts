import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../models/menu-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() menuToggled = new EventEmitter<boolean>();
  isOpen = false;

  menuItems: MenuItem[] = [
    { path: '/informations', label: 'Informations', icon: 'person' },
    { path: '/diplomes', label: 'Diplômes', icon: 'school' },
    { path: '/competences', label: 'Compétences', icon: 'psychology' },
    { path: '/experience', label: 'Expériences', icon: 'work' },
    { path: '/projets', label: 'Projets', icon: 'folder' },
    { path: '/coordonnees', label: 'Coordonnées', icon: 'contact_mail' }
  ];

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.menuToggled.emit(this.isOpen);
  }

}
