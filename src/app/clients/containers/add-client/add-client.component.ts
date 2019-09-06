import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';
@Component({
 selector: 'app-add-client',
 templateUrl: './add-client.component.html',
 styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
 constructor(
   private clientsService: ClientsService,
   private router: Router
 ) { }
 ngOnInit() {
 }
 onSubmit(item: Client) {
   // console.log(item);
   this.clientsService.add(item);
   this.router.navigate(['clients']);
 }
}