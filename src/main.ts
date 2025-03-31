import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { InformationsComponent } from './app/features/components/informations/informations.component';
import { DiplomesComponent } from './app/features/components/diplomes/diplomes.component';
import { CompetencesComponent } from './app/features/components/competences/competences.component';
import { ProjetsComponent } from './app/features/components/projets/projets.component';
import { ExperienceComponent } from './app/features/components/experience/experience.component';
import { CoordonneesComponent } from './app/features/components/coordonnees/coordonnees.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: InformationsComponent },
      { path: 'diplomes', component: DiplomesComponent },
      { path: 'competences', component: CompetencesComponent },
      { path: 'projets', component: ProjetsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'coordonnees', component: CoordonneesComponent },
      { path: '**', redirectTo: '' },
    ])
  ]
});
