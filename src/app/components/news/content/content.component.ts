
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';
import * as Constants from '../../../constants';
import { Contentreward } from '../../../contentreward';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 contentrew: Contentreward = new Contentreward();
  editnewscontent: any;
  viewnewscontent: any;
  id: any;
  listnewscontent: any;
  totalcount: any;
  p = 1;
  check: any;
  checknext: any;
  count: any;
  filesToUpload: Array<File> = [];
  subject: any;
  content: any;
  tags: any;
  submitted = false;
  contentid: any;
  viewreward: any;
  likes: any;
  constructor(private http: HttpClient, private servicesService: ServicesService) { }
  ngOnInit() {
    this.servicesService.getContentList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('countnewscontent', data.totalPages);
        this.listnewscontent = data.pageContent;
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('countnewscontent');
    this.checkingnewscontent();
    this.nextcheckingnewscontent();
  }

  onContent() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
    formData.append('subject', this.subject);
    formData.append('content', this.content);
    formData.append('tags', this.tags);
    console.log('form data variable :   ' + formData.toString());
    this.http.post(Constants.CONSTANTS.API_ENDPOINT + '/saveNewsContent', formData) .subscribe(
      data => {
        this.contentid = data;
        this.contentrew.contentid = this.contentid.id;
      },
      error => console.log(error)
    );
}

onReward() {
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + '/saveRewardData', this.contentrew) .subscribe();
  window.location.reload();
}

Save() {
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    formData.append('image', files[i]);
    formData.append('id', this.id);
    formData.append('subject', this.subject);
    formData.append('content', this.content);
    formData.append('tags', this.tags);
    formData.append('like', this.likes);
  }
  console.log('form data variable :   ' + formData.toString());
   this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editNewsContent', formData) .subscribe(file => console.log('file', file));

}
SaveReward() {
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editRewardsdata', this.contentrew) .subscribe();
  window.location.reload();
}
Image(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}
contentnews(fileInput: any) {
  this.content = fileInput.target.value;
}
subjectnews(fileInput: any) {
  this.subject = fileInput.target.value;
}
tagsnews(fileInput: any) {
  this.tags = fileInput.target.value;
}
editId(fileInput: any) {
  this.id = fileInput.target.value;
}
// view item method
viewitemcontent(id) {
  this.servicesService.viewcontentbyid(id).subscribe(
    data => {
      this.viewnewscontent = data;
    },
    error => console.log(error)
  );

  this.servicesService.viewrewardbyid(id).subscribe(
    data => {
      this.viewreward = data;
    },
    error => console.log(error)
  );

}



// delete item method
  deleteitemcontent(id) {
  this.servicesService.deletecontentbyid(id).subscribe(
    data => {
    },
    error => console.log(error)
  );
  window.location.reload();
}



// edit item method
edititemcontent(id) {
  this.servicesService.editcontentbyid(id).subscribe(
    data => {
      this.editnewscontent = data;
      this.id = this.editnewscontent.id;
      console.log('editdata...........................', this.editnewscontent);
    },
    error => console.log(error)
  );

  // FOR REWARDS

  this.servicesService.editrewardsbyid(id).subscribe(
    data => {
      this.contentrew.contentid = id;
      console.log('editdata...........................', this.editnewscontent);
    },
    error => console.log(error)
  );

}


nextnewscontent() {
  this.p++;
  this.servicesService.getContentList (this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listnewscontent = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
  console.log('next button', this.p);
  this.checkingnewscontent();
  this.nextcheckingnewscontent();
  }
  checkingnewscontent() {
    if (this.p === 1) {
      this.check = true;
      console.log('if pp is 0', this.check);
    } else {
      this.check = false;
      console.log('if pp is not 0', this.check);

    }
  }
  nextcheckingnewscontent() {

    console.log('count for pagination', Math.floor(this.count / 8) );
    if ((this.p === Math.floor(this.count / 12) + 1) ) {

      this.checknext = true;
      console.log('if pn is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if pn is not 0', this.checknext);

    }
  }


  previousnewscontent() {
    console.log('before', this.p);
    this.p--;
    this.servicesService.getContentList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listnewscontent = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    this.checkingnewscontent();
    this.nextcheckingnewscontent();
    console.log('after', this.p);
  }

}
