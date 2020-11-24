import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public page: string = 'recipes';

  onChangePage(event: string): void {
    this.page = event;
  }
}
