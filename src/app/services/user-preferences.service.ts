import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserPreferencesService {

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  get theme(): string {
    if (!this.isBrowser()) return 'theme-classic';
    return localStorage.getItem('theme') || 'theme-classic';
  }

  set theme(value: string) {
    if (!this.isBrowser()) return;
    localStorage.setItem('theme', value);
    document.body.classList.remove('theme-classic', 'theme-rpg', 'dark-theme');
    document.body.classList.add(value);
  }

  get language(): string {
    if (!this.isBrowser()) return 'fr';
    return localStorage.getItem('lang') || 'fr';
  }

  set language(value: string) {
    if (!this.isBrowser()) return;
    localStorage.setItem('lang', value);
  }

  get hasSeenWelcome(): boolean {
    return this.isBrowser() && document.cookie.includes('welcomeSeen=true');
  }

  set hasSeenWelcome(value: boolean) {
    if (!this.isBrowser()) return;
    document.cookie = value
      ? 'welcomeSeen=true; max-age=31536000; path=/'
      : 'welcomeSeen=; max-age=0; path=/';
  }
}
