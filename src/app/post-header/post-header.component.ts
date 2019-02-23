import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../Person';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {
  @Input() author: Person;

  constructor() {
  }

  ngOnInit() {
  }

}
