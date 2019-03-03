import {Component, OnInit} from '@angular/core';
import {Post} from '../post';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  offers: Post[];
  id = +this.route.snapshot.paramMap.get('id');

  constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) {
  }

  ngOnInit() {
    this.getPost();
    this.getOffers();
  }

  getPost(): void {
    this.postService.getPost(this.id).subscribe(post => this.post = post);
  }

  getOffers(): void {
    this.postService.getOffers(this.id).subscribe(offers => this.offers = offers);
  }

  goBack(): void {
    this.location.back();
  }

  log_offers(): void {
    console.log(this.offers);
  }

}
