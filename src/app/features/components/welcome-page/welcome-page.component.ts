import { Component, Output, EventEmitter } from '@angular/core';
import { UserPreferencesService } from '../../../services/user-preferences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {

  @Output() preferencesSet = new EventEmitter<void>();

constructor(
  private prefs: UserPreferencesService,
  private router: Router
) {}
  changeLanguage(lang: string) {
    this.prefs.language = lang;
  }

changeTheme(theme: string) {
  this.prefs.theme = theme;
  this.prefs.hasSeenWelcome = true;
  this.isFadingOut = true;

  setTimeout(() => {
    this.preferencesSet.emit();
    this.router.navigateByUrl('/informations');
  }, 600); // durée de l’animation CSS
}

  isFadingOut = false;

}


