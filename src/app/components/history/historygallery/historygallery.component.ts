import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';
import { HttpClient } from '@angular/common/http';
import * as Constants from '../../../constants';
import { Contentreward } from '../../../contentreward';

@Component({
  selector: 'app-historygallery',
  templateUrl: './historygallery.component.html',
  styleUrls: ['./historygallery.component.css']
})
export class HistorygalleryComponent implements OnInit {
  contentrew: Contentreward = new Contentreward();
  editnewsgallery: any;
  viewhistorygallery: any;
  id: any;
  listnewsgallery: any;
  totalcount: any;
  p = 1;
  check: any;
  checknext: any;
  count: any;
  filesToUpload: Array<File> = [];
  subject: any;
  contentid: any;
  submitted = false;
  viewrewardhisgall: any;
  constructor(private http: HttpClient, private servicesService: ServicesService) { }

  ngOnInit() {
        this.servicesService.gethistoryGalleryList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('counthistorygallery', data.totalPages);
        this.listnewsgallery = data.pageContent;
        console.log('data from posters........... ', this.listnewsgallery);
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('counthistorygallery');
    this.checkingnewsgallery();
    this.nextcheckingnewsgallery();
  }
  onGallery() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
      formData.append('subject', this.subject);
    }
    console.log('form data variable :   ' + formData.toString());
    this.http.post(Constants.CONSTANTS.API_ENDPOINT + '/saveHistoryGallery', formData) .subscribe(
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

  }
  console.log('form data variable :   ' + formData.toString());
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editHistoryGallery', formData) .subscribe(file => console.log('file', file));
}
SaveReward() {
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editRewardsdata', this.contentrew) .subscribe();
  window.location.reload();
}
Imagegallery(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}

subjectgallery(fileInput: any) {
  this.subject = fileInput.target.value;
}

editId(fileInput: any) {
  this.id = fileInput.target.value;
}

// view item method
viewitemhistorygallery(id) {
  this.servicesService.viewhistorygallerybyid(id).subscribe(
    data => {
      this.viewhistorygallery = data;

    },
    error => console.log(error)
  );

  this.servicesService.viewrewardbyid(id).subscribe(
    data => {
      this.viewrewardhisgall = data;
      console.log('data fro rewards view..................' + this.viewrewardhisgall);
    },
    error => console.log(error)
  );
}



// delete item method

  deleteitemnewsgallery(id) {
  this.servicesService.deletehistorygallerybyid(id).subscribe(
    data => {
    },
    error => console.log(error)
  );
  window.location.reload();
}



// edit item method
edititemnewsgalllery(id) {
  this.servicesService.edithistorygallerybyid(id).subscribe(
    data => {
      this.editnewsgallery = data;
      this.id = this.editnewsgallery.id;
      console.log('editdata...........................', this.editnewsgallery);
    },
    error => console.log(error)
  );

    // FOR REWARDS

    this.servicesService.editrewardsbyid(id).subscribe(
      data => {
        this.contentrew.contentid = id;
      },
      error => console.log(error)
    );
}


nextnewsgallery() {
  this.p++;
  this.servicesService.gethistoryGalleryList (this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listnewsgallery = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
  console.log('next button', this.p);
  this.checkingnewsgallery();
  this.nextcheckingnewsgallery();
}
checkingnewsgallery() {
    if (this.p === 1) {
      this.check = true;
      console.log('if pp is 0', this.check);
    } else {
      this.check = false;
      console.log('if pp is not 0', this.check);

    }
  }
  nextcheckingnewsgallery() {

    console.log('count for pagination', Math.floor(this.count / 8) );
    if ((this.p === Math.floor(this.count / 12) + 1) ) {

      this.checknext = true;
      console.log('if pn is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if pn is not 0', this.checknext);

    }
  }


  previousnewsgallery() {
    console.log('before', this.p);
    this.p--;
    this.servicesService.gethistoryGalleryList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listnewsgallery = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    this.checkingnewsgallery();
    this.nextcheckingnewsgallery();
    console.log('after', this.p);
  }
}
