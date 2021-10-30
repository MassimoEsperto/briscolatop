import { Component, Input, OnInit } from '@angular/core';
import { BriscolaService } from 'src/app/services/briscola.service';

@Component({
  selector: 'my-toast',
  templateUrl: './my-toast.component.html',
  styleUrls: ['./my-toast.component.scss']
})
export class MyToastComponent implements OnInit {

  @Input() testo: string = '';

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.testo != '') {
      setTimeout(() => {
        this.testo = ''
      }, 3000);
    }
  }

}
