import { Injectable, ApplicationModule } from '@angular/core';
import { Subject } from 'rxjs';

import { SelectionDataType } from './selection.model';
import { HttpClient } from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class SelectionService {
  private posts: SelectionDataType[] = [];
  private postsUpdated = new Subject<SelectionDataType[]>();

  constructor(private http: HttpClient) {}

  getPosts() {
    // return [...this.posts];
    this.http
    .get<{ message: string; posts: SelectionDataType[] }>(
      "http://localhost:3000/api/posts"
    )
    .subscribe(postData => {
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPosts(title: string, content: string, actnum :boolean, prenum : boolean) {
    const post: SelectionDataType = {id : "", eContentType: content, eTitle: title, eActNum:  actnum,ePreNum:prenum};
    this.http
    .post<{ message: string }>("http://localhost:3000/api/posts", post)
    .subscribe(responseData => {
      console.log(responseData.message);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });  }
}