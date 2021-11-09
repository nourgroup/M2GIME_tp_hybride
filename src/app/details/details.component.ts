import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { PhoneBookService } from '../phone-book/phone-book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  @Input () name?: String ;
  
  contact! : Contact
  
  ngOnInit(): void {
  }

  
  //@Output () contactEvent = new EventEmitter <String>() ;

  constructor(private mPhoneBookService : PhoneBookService) { 

  }

  ngOnChanges() : void{
    this.contact = this.mPhoneBookService.getContact(this.name)
  }
}
