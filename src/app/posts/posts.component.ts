import {Component, HostListener, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {Post} from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  columns: number;
  numbers: any[];

  getPosts(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }

  constructor(private postService: PostService) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = window.innerWidth;
    if (width > 1600) {
      this.reArrange(4);
    } else if (width > 1200) {
      this.reArrange(3);
    } else if (width > 900) {
      this.reArrange(2);
    } else {
      this.reArrange(1);
    }
  }

  reArrange(size: number): void {
    if (this.columns !== size) {
      this.columns = size;
      this.numbers = Array(this.columns).fill(0).map((x, i) => i);
    }
  }

  ngOnInit() {
    this.getPosts();
    this.onResize(null);
  }

}
