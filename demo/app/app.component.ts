import { Component } from '@angular/core';
import { SpinnerService } from '../../';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private spinnerService: SpinnerService) {

  }
  showLoader() {
    this.spinnerService.showLoader();
    setTimeout(() => {
      this.spinnerService.hideLoader();
    }, 3000)
  }
}
