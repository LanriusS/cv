import { Component } from '@angular/core';
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

  menuItems: MenuItem[] = [
    { path: '/informations', label: 'Informations', icon: 'person' },
    { path: '/competences', label: 'Compétences', icon: 'psychology' },
    { path: '/coordonnees', label: 'Coordonnées', icon: 'contact_mail' },
    { path: '/diplomes', label: 'Diplômes', icon: 'school' },
    { path: '/experiences', label: 'Expériences', icon: 'work' },
    { path: '/projets', label: 'Projets', icon: 'folder' }
  ];

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

}
