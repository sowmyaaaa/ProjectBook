// import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionDataType } from '../selection.model';
// import {SelectionService} from '../selectionservice.service';
import {SelectionService} from '../selectionservice.service';



@Component({
  selector: 'app-teacher-side',
  templateUrl: './teacher-side.component.html',
  styleUrls: ['./teacher-side.component.css']
})
export class TeacherSideComponent implements OnInit {

  posts: SelectionDataType[] = [];
  private postsSub: Subscription;

  constructor(public postsService: SelectionService) {}

  ngOnInit() {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: SelectionDataType[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  

}
