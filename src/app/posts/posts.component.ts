import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  max_columns = 4;
  numbers: any[];

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  constructor(private postService: PostService) {
    this.numbers = Array(this.max_columns).fill(0).map((x, i) => i);
  }

  reArrange(size: number): void {
    this.numbers = Array(this.max_columns).fill(0).map((x, i) => i);
  }

  ngOnInit() {
    this.getPosts();
  }

}
