import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-informations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informations.component.html',
  styleUrl: './informations.component.scss'
})
export class InformationsComponent {

  currentTheme='rpgTheme';
  // currentTheme='classicTheme';
}
