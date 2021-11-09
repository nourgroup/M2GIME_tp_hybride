import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

    //@Input name! : String 
    private contacts : Contact[] = [
      {
        nom : "nour",
        phone : "00192992",
        image : "gotlib-newton.jpg",
        count : 100
      },
      {
        nom : "",
        phone : '',
        image : "gotlib-coccinelle.jpg",
        count : 100
      },
      {
        nom : "nour-ed-dine",
        phone : "7726727",
        image : "gotlib-jujube.jpg",
        count : 100
      }
    ]
  
  constructor() { }

    getContact(nom : String|undefined) : Contact{
      return this.contacts.find(contact => contact.nom == nom ) as Contact
    }

    getContacts() : Contact[]{
        return this.contacts
    }

    addContact(contact : Contact){
      this.contacts.push(contact)
    }
}
