import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: ` <my-navbar></my-navbar>
              <div class="page">
              <router-outlet></router-outlet>
              </div>
              <my-confirm-dialog></my-confirm-dialog>`

})
export class AppComponent {
  
}
