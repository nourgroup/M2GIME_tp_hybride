import { Component, Input, OnInit,OnChanges, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
  
  /* listener 2 bloc ng */
  //@Output () contactEvent = new EventEmitter <String>() ;

  constructor(private mPhoneBookService : PhoneBookService,private router : Router ) { 

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
  }

  showDetails () {
    /*
      Noter que le lien est incorporé dans le button dans HTML
    */
    // passage simple sans param
    // this.router.navigate(['/details']);
    // passage avec param fix
    // this.router.navigate(['/details;name=11']);
    // passage simple avec param dynamique en fonction  
    this.router.navigate(['/details',  { name : this.contact.nom } ]);
    // console.log("showDetails")
  }

}
