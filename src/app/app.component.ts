import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./features/components/menu/menu.component";
import { HeaderComponent } from "./features/components/header/header.component";
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './features/components/welcome-page/welcome-page.component';
import { UserPreferencesService } from './services/user-preferences.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, HeaderComponent, CommonModule, WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // title = 'CV';

  // menuOpen = false;

  // onMenuToggle(state: boolean) {
  //   this.menuOpen = state;
  // }

  // currentTheme='rpgTheme';

  showWelcome = signal(false);

  constructor(private prefs: UserPreferencesService) {
    this.showWelcome.set(!this.prefs.hasSeenWelcome);
  }

  onPreferencesSet() {
    this.prefs.hasSeenWelcome = true;
    this.showWelcome.set(false);
  }
}
