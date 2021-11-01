import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //@Input name! : String 
  firstname : String 
  quantity : number = 100
  
  constructor() { 
    this.firstname = "nour"
  }

  ngOnInit(): void {
  }

  onSub(){
    this.quantity--
  }
}
