import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempComponent } from './SelectionMain/temp/temp.component';
import { SelectionCardComponent } from './SelectionMain/selection-card/selection-card.component';

const routes: Routes = [
  {path : 'selection' , component : SelectionCardComponent},
  {path : 'contentSelection' , component : TempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
