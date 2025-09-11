import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { FormComponent } from "./components/form/form.component";
import { FooterComponent } from './components/footer/footer.component';
import { ProgettiComponent } from "./components/progetti/progetti.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, BodyComponent, FormComponent, FooterComponent, ProgettiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'test-app';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const sections = this.el.nativeElement.querySelectorAll('.fade-section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // quando entra nello schermo
          entry.target.classList.add('show');
        } else {
          // quando esce dallo schermo
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 }); // triggera al 20% di visibilità

    sections.forEach((section: any) => {
      observer.observe(section);
    });
  }
}
