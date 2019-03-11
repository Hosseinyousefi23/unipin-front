import {Component, OnInit} from '@angular/core';
import * as moment from 'jalali-moment';
import {Tag} from '../Tag';
import {TagService} from '../tag.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  tags: Tag[];
  startDateObject: moment.Moment;
  endDateObject: moment.Moment;

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.startDateObject = moment('1395-11-22', 'jYYYY,jMM,jDD');
    this.endDateObject = moment('1395-11-22', 'jYYYY,jMM,jDD');
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

}
