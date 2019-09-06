import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  public collection: Client[];
  public headers = [
    'Name',
    'Email',
    'State',
    'Action'
  ];
  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.collection = this.clientsService.collection;
  }

  changeState(arg) {
    // console.log(arg);
    this.clientsService.update(arg.obj, arg.state);
  }

}