import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';

  scrollSecao(event: Event, sectionId: string): void {
    event.preventDefault();

    const elemento = document.getElementById(sectionId);
    if (elemento) {
      elemento.scrollIntoView({behavior: 'smooth'})
    }
  }
}
