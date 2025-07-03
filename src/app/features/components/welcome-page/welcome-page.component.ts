import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})
export class WelcomePageComponent {
  prefs: any;
  changeLanguage(lang: string) {
    this.prefs.language = lang;
  }
  changeTheme(theme: string) {
    this.prefs.theme = theme;
  }

}
