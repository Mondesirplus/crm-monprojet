import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';
@Component({
 selector: 'app-item-prestation',
 templateUrl: './item-prestation.component.html',
 styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
 public states = State;
 @Input() item: Prestation;
 @Output() doChange: EventEmitter<any> = new EventEmitter();
 constructor() {
 }
 ngOnInit() {
   console.log(this.item);
 }
 public changeState(arg, item) {
  //item.state = arg.target.value;
  this.doChange.emit({obj : item, state: arg.target.value});
 }
}