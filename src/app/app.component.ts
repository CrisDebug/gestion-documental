import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component'; 

@Component({
  selector: 'app-root',
  standalone: true, // ✅ necesario para Angular 17+
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ plural
})
export class AppComponent {
  title = 'gestion-documental-ui';
}
