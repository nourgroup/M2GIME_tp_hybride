import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  contact : Contact ={
    count : 0,
    image :"",
    nom : "",
    phone : ""
  }
  

  
  constructor(private mPhoneBookService : PhoneBookService) { }

  ngOnInit(): void {
  }

  addContact(){
    this.mPhoneBookService.addContact(this.contact)
    //this.mPhoneBookService.getContacts()
    //console.log(this.mPhoneBookService.getContacts())
  }



}
