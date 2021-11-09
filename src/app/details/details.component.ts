import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }
  
  @Input () name?: String ;
  
  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log("passer le parametre depuis autre component : "+this.name)
  }

}
