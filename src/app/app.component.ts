import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./features/components/menu/menu.component";
import { HeaderComponent } from "./features/components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CV';

  menuOpen = false;

  onMenuToggle(state: boolean) {
    this.menuOpen = state;
  }

  currentTheme='rpgTheme';

}
