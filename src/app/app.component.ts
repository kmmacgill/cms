import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'docs';

  switchView(selectedFeature: string) {
    this.loadedFeature = selectedFeature;
  }
}
