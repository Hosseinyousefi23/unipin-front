import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-card-detail',
  templateUrl: './post-card-detail.component.html',
  styleUrls: ['./post-card-detail.component.css']
})
export class PostCardDetailComponent implements OnInit {
  @Input() post: Post;

  constructor() {
  }

  ngOnInit() {
  }

}
