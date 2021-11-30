import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  /* listener 2 bloc ng */
  //@Output () contactEvent = new EventEmitter <String>() ;

  constructor(private mPhoneBookService : PhoneBookService,private router : ActivatedRoute ) { 

  }

  // ancien code 
  /*ngOnChanges() : void{
    //listener 2 bloc ng 
    //this.contact = this.mPhoneBookService.getContact(this.name)
  }*/

    // Quand la fonction se charge 
    ngOnInit() : void{
      // je prend endpoint param "name" passer en parametre
      const name = this.router.snapshot.paramMap.get('name');
      if (name!=null) {
        this.contact= this.mPhoneBookService.getContact(name);
      } 
    }

  modifier(){
    console.log("clicked")
    /* listener 2 bloc ng */
    //this.mPhoneBookService.setContact(this.contact)
  }
}
