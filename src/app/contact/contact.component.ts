import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() name! : String 
  contacts! : Contact[]
  contact! : Contact

  constructor(private mPhoneBookService : PhoneBookService) { 
    this.contacts = mPhoneBookService.getContacts()
    this.contact = mPhoneBookService.getContact("nour")

  }

  ngOnInit(): void {
  }

  onSub(){
    this.contact.count--
  }
  addContact(){
    var contact =  {
      nom     : this.contact.nom,
      phone   : this.contact.phone,
      image   : this.contact.image,
      count   : this.contact.count
    }
    this.mPhoneBookService.addContact(contact)
  }
}
