import {Tag} from './Tag';
import {DatePipe} from "@angular/common";

export class Post {
  id: number;
  image: string;
  title: string;
  context: string;
  university: string;
  tags: Tag[];
  publish_time: number;
}
