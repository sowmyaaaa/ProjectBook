import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { SelectionDataType } from '../selection.model';
// import {  }
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

import {SelectionService} from '../selectionservice.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-selection-card',
  templateUrl: './selection-card.component.html',
  styleUrls: ['./selection-card.component.css']
})
export class SelectionCardComponent implements OnInit {

  // private selectionservice : any;
  enteredContentType = "";
  enteredTitle ="";
  enteredPreNum = 0;
  enteredActNum = 0;
  checkPre = new FormControl(false);
  checkAct = new FormControl(false);

  constructor(public postsService: SelectionService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPosts(form.value.content, form.value.title,form.value.actnum,form.value.prenum);
    form.resetForm();
  }

  ngOnInit(){}

  // constructor() {}

  // @Output() postCreated = new EventEmitter<SelectionDataType>();

  // onAddPost(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   const post: SelectionDataType = {
  //   eTitle: form.value.title,
  //     eContentType: form.value.content,
  //     eActNum : form.value.actnum,
  //     ePreNum : form.value.prenum
  //   };
  //   this.postCreated.emit(post);
  // }

  // onAddPost(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.postsService.addPosts(form.value.content, form.value.title,form.value.prenum,form.value.actnum);
  //   form.resetForm();
  // }


}