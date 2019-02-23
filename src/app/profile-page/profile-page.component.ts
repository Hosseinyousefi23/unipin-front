import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Person} from '../Person';
import {PostService} from '../post.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  person: Person;

  constructor(private route: ActivatedRoute, private postService: PostService, private location: Location) {
  }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.postService.getPerson(slug).subscribe(person => this.person = person);
    console.log(this.person);
  }

  goBack(): void {
    this.location.back();
  }

}
