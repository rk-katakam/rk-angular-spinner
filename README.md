# rk-angular-spinner

Angular Spinner is used to show spinner on UI. 
 
 Here is the sample spinner:
![webp net-gifmaker](https://user-images.githubusercontent.com/36837542/44386876-6f167480-a541-11e8-8928-a9601ec798fe.gif)

# Installation

```sh
$ npm install rk-angular-spinner
```
# Usage

After installing the module:
  - Register SpinnerModule
  ```sh
import { SpinnerModule } from 'rk-angular-spinner';

```
  - In the component provide the Spinner Service dependency
   ```sh
import { SpinnerService } from 'rk-angular-spinner';

export class AppComponent {
  constructor(private spinnerService: SpinnerService) {
  }

```
  - Toggle the loader using below two methods
  ```sh
this.spinnerService.showLoader();
this.spinnerService.hideLoader();

```
 - Place html selector in your app.component.html
   ```sh
   <app-rk-spinner text="Loader.."></app-rk-spinner>
   ```
- For more info please check the demo sample provided, which listens on http://localhost:4200
  ```sh
  $ npm install
  $ npm start
```
