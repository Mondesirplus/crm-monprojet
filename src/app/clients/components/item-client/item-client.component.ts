import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
@Component({
 selector: 'app-item-client',
 templateUrl: './item-client.component.html',
 styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
 public states = StateClient;
 @Input() item: Client;
 @Output() doChange: EventEmitter<any> = new EventEmitter();
 constructor() {
 }
 ngOnInit() {
   // console.log(this.item);
 }
 public changeState(arg, item) {
   // item.state = arg.target.value;
   this.doChange.emit({obj : item, state: arg.target.value});
 }
}