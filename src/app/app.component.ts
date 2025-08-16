import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavabarComponent } from './components/navabar/navabar.component';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { FooterComponent } from "./components/footer/footer.component";
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavabarComponent, HomeComponent, AboutComponent, ExperienceComponent, ContactComponent, ProjectsComponent, SkillsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ngAfterViewInit() {
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar',
    offset: 100
  });
}
}
