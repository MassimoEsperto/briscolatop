import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-button-submit',
  templateUrl: './my-button-submit.component.html',
  styleUrls: ['./my-button-submit.component.scss']
})
export class MyButtonSubmitComponent implements OnInit {

  //parametri di input valorizzati di default
  @Output() submit = new EventEmitter();
  @Input() disabled = true;
  @Input() color: string = "info";
  @Input() loading = false;

  constructor() { }

  ngOnInit() { }

}
