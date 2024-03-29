import { Injectable } from '@angular/core';
import { Contact } from '../contact';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {
  
    private contacts : Contact[] = [
      {
        nom : "nour",
        phone : "00192992",
        image : "gotlib-newton.jpg",
        count : 100
      },
      {
        nom : "nour-ed",
        phone : '0013232992',
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

    setContact(mContact : Contact){
        // modifier l'element
        //console.log("clicked"+contact.nom)
        //var contactFound = this.contacts.find(contact => contact.nom == mContact.nom ) as Contact
        this.contacts.forEach(element => {
          if(element.nom == mContact.nom){
              element.count = mContact.count
              element.image = mContact.image
              element.phone = mContact.phone
          }
        });
        
    }
}
