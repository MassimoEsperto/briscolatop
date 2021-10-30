import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {

  @Input() chechList:any
  @Output("selected") selected = new EventEmitter();
  list_length:number=0

  constructor() { }

  ngOnInit() {}

  updateCheckedOptions(option, event) {
    this.chechList[option].checked = event.target.checked;
    let output:any=this.chechList.filter(item => item.checked);
    this.list_length=output.length;
    this.selected.emit(output)
  }
}