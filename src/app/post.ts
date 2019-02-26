import {Tag} from './Tag';
import {Person} from './Person';

export class Post {
  id: number;
  image: string;
  title: string;
  context: string;
  event_status: number;
  university: string;
  event_start_time: string;
  event_end_time: string;
  event_place: string;
  tags: Tag[];
  publish_time: number;
  author: Person;
}
