import { Component, Renderer2 } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'real';

  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  modeChange(event: MatSlideToggleChange) {
    const checked = event.checked;

    if (checked) {
      this.renderer.addClass(document.body, 'darkMode');
      this.isDarkMode = checked;
    } else {
      this.renderer.removeClass(document.body, 'darkMode');
      this.isDarkMode = checked;
    }
  }
}
