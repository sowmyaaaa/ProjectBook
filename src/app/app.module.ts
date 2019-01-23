import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule,Routes} from '@angular/router';

import { MatCardModule,
        MatRadioModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule } 
        from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { SelectionCardComponent } from './SelectionMain/selection-card/selection-card.component';
import { TempComponent } from './SelectionMain/temp/temp.component';
import { TeacherSideComponent } from './SelectionMain/teacher-side/teacher-side.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectionCardComponent,
    TempComponent,
    TeacherSideComponent

  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
