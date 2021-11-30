import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts! : Contact[] 
  contact! : Contact 

  ContactsName? : String

  constructor(public mPhoneBookService : PhoneBookService){
      this.contacts = mPhoneBookService.getContacts() 
  }

  // Quand la fonction se charge 
  ngOnInit() : void{

  }
  
  onModify(mContact : String){
    //console.log("clicked:"+mContact)
    this.ContactsName = mContact
  }

}
