import { Component } from '@angular/core';
import { Contact } from './contact';
import { PhoneBookService } from './phone-book/phone-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MGimeTp4';

  /*
  contacts! : Contact[] 

  ContactsName? : String

  constructor(public mPhoneBookService : PhoneBookService){
      this.contacts = mPhoneBookService.getContacts() 
  }
  
  onModify(mContact : String){
    //console.log("clicked:"+mContact)
    this.ContactsName = mContact
  }
  */

}
