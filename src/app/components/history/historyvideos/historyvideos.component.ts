import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../../services.service';
import * as Constants from '../../../constants';
import { Contentreward } from '../../../contentreward';

@Component({
  selector: 'app-historyvideos',
  templateUrl: './historyvideos.component.html',
  styleUrls: ['./historyvideos.component.css']
})
export class HistoryvideosComponent implements OnInit {

  contentrew: Contentreward = new Contentreward();
  title: any;
  videoUrl: any;
  videoId: any;
  thumbnailImage: any;
  filesToUpload: Array<File> = [];
  totalcount: any;
  listhistoryvideo: any;
  p = 1;
  count: any;
  id: any;
  viewhistoryvideo: any;
  editnewsvideo: any;
  check: any;
  checknext: any;
  contentid; any;
  viewreward: any;
  constructor(private http: HttpClient, private servicesService: ServicesService) { }
  ngOnInit() {
    this.servicesService.gethistoryVideosList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('counthistoryvideos', data.totalPages);
        this.listhistoryvideo = data.pageContent;
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('counthistoryvideos');
    this.checkingnewsvideo();
    this.nextcheckingnewsvideo();
  }
  onVideo() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
      formData.append('title', this.title);
      formData.append('videoUrl', this.videoUrl);
      formData.append('videoId', this.videoId);
    }
    console.log('form data variable :   ' + formData.toString());
    this.http.post(Constants.CONSTANTS.API_ENDPOINT + '/saveHistoryVideos', formData) .subscribe(
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
      formData.append('title', this.title);
      formData.append('videoUrl', this.videoUrl);
      formData.append('videoId', this.videoId);
  }
  console.log('form data variable :   ' + formData.toString());
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editHistoryVideos', formData) .subscribe(file => console.log('file', file));

}
SaveReward() {
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editRewardsdata', this.contentrew) .subscribe();
  window.location.reload();
}
titlenews(fileInput: any) {
  this.title = fileInput.target.value;
}
videoUrlnews(fileInput: any) {
  this.videoUrl = fileInput.target.value;
}
videoIdnews(fileInput: any) {
  this.videoId = fileInput.target.value;
}
editId(fileInput: any) {
  this.id = fileInput.target.value;
}

Imagenews(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}

// view item method
viewitemhistoryvideo(id) {
  this.servicesService.viewhistoryVideosbyid(id).subscribe(
    data => {
      this.viewhistoryvideo = data;
      console.log('data fro view video.........' + data);
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
  deleteitemvideo(id) {
  this.servicesService.deletehistoryVideosbyid(id).subscribe(
    data => {
    },
    error => console.log(error)
  );
  window.location.reload();
}



// edit item method
edititemvideo(id) {
  this.servicesService.edithistoryVideosbyid(id).subscribe(
    data => {
      this.editnewsvideo = data;
      this.id = this.editnewsvideo.id;
      console.log('editdata...........................', this.editnewsvideo);
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

nextnewsvideo() {
  this.p++;
  this.servicesService.gethistoryVideosList (this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listhistoryvideo = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
  console.log('next button', this.p);
  this.checkingnewsvideo();
  this.nextcheckingnewsvideo();
  }
  checkingnewsvideo() {
    if (this.p === 1) {
      this.check = true;
      console.log('if pp is 0', this.check);
    } else {
      this.check = false;
      console.log('if pp is not 0', this.check);

    }
  }
  nextcheckingnewsvideo() {

    if ((this.p === Math.floor(this.count / 12) + 1) ) {

      this.checknext = true;
      console.log('if pn is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if pn is not 0', this.checknext);

    }
  }


  previousnewsvideo() {
    console.log('before', this.p);
    this.p--;
    this.servicesService.gethistoryVideosList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listhistoryvideo = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    this.checkingnewsvideo();
    this.nextcheckingnewsvideo();
    console.log('after', this.p);
  }


}
