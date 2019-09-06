import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
 providedIn: 'root'
})
export class ClientsService {
 private itemsCollection: AngularFirestoreCollection<Client>;
 private pCollection: Observable<Client[]>;
 constructor(private afs: AngularFirestore) {
   this.itemsCollection = afs.collection<Client>('clients');
   this.collection = this.itemsCollection.valueChanges();
 }
 // get collection
 get collection(): Observable<Client[]> {
   return this.pCollection;
 }
 // set collection
 set collection(col: Observable<Client[]>) {
   this.pCollection = col;
 }
 // update item in collection
 public update(item, state) {
   console.log(item);
   item.state = state;
   console.log(item);
 }
 // add item in collection
 public add(item: Client) {
   // this.collection.push(item);
 }
 // get item by id in collection
}