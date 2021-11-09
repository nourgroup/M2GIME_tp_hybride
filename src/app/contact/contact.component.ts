import { Component, Input, OnInit,OnChanges, Output, EventEmitter } from '@angular/core';
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

  @Output () contactEvent = new EventEmitter <String>() ;

  constructor(private mPhoneBookService : PhoneBookService) { 

  }

  ngOnChanges() : void{
    this.contact = this.mPhoneBookService.getContact(this.name)
  }

  ngOnInit(): void {
    
  }

  onSub(){
    this.contact.count--
  }

  modifier(){
    console.log("clicked")
    this.contactEvent.emit(this.contact.nom);
  }

}
