import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Post} from '../post';


@Component({
  selector: 'app-offer-posts',
  templateUrl: './offer-posts.component.html',
  styleUrls: ['./offer-posts.component.css']
})
export class OfferPostsComponent implements OnInit {
  @Input() posts: Post[];
  columns: number;
  numbers: any[];


  constructor() {
  }

  ngOnInit() {
    this.onResize(null);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const width = window.innerWidth;
    if (width > 1400) {
      this.reArrange(5);
    } else if (width > 1200) {
      this.reArrange(4);
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
}
