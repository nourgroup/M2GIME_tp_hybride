import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';

/* 
  On met les routes afin que pour outlet arrive à toruver le component qu'il faut
  afficher , liaison endpoint url avec le component
*/
const routes : Routes = [
  { path : 'list', component : ContactListComponent },
  // Je l'ai appelé dans details dans contactComponent
  { path : 'details', component : DetailsComponent },
  // Faire la redrection vers la liste
  { path : '', redirectTo :"list", pathMatch : "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
