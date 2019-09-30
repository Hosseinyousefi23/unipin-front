import {Component, OnInit} from '@angular/core';
import * as moment from 'jalali-moment';
import {Tag} from '../Tag';
import {FileSystemDirectoryEntry, FileSystemFileEntry, UploadEvent, UploadFile} from 'ngx-file-drop';
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
  public image: UploadFile;

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.startDateObject = moment('1395-11-22', 'jYYYY,jMM,jDD');
    this.endDateObject = moment('1395-11-22', 'jYYYY,jMM,jDD');
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  public dropped(event: UploadEvent) {
    this.image = event.files[0];
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {

          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public file_over(event) {
    console.log(event);
  }

  public file_leave(event) {
    console.log(event);
  }


}
