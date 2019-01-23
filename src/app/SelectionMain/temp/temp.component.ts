import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectionDataType } from '../selection.model';
// import {SelectionService} from '../selectionservice.service';
import {SelectionService} from '../selectionservice.service';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

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

  // @Input() posts: SelectionDataType[] = [];

  // constructor(){}
  // ngOnInit(){}
  // posts: SelectionDataType[] = [];
  // private postsSub: Subscription;

  // constructor(public postsService: SelectionService) {}

  // ngOnInit() {
  //   this.posts = this.postsService.getPosts();
  //   this.postsSub = this.postsService.getPostUpdateListener()
  //     .subscribe((posts: SelectionDataType[]) => {
  //       this.posts = posts;
  //     });
  // }

  // ngOnDestroy() {
  //   this.postsSub.unsubscribe();
  // }
}


