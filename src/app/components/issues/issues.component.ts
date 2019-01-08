import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  totalcount: any;
  listissues: any;
  viewissue: any;
  p = 1;
  check: any;
  checknext: any;
  count: any;
  constructor(private servicesService: ServicesService) { }
  ngOnInit() {
    this.servicesService.getIssuesList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('countissue', data.totalPages);
        this.listissues = data.pageContent;
        console.log('data from issues........... ', this.listissues);
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('countissue');
    this.checking();
    this.nextchecking();
  }
  viewissuedata(id) {
    this.servicesService.viewissuebyid(id).subscribe(
      data => {
        this.viewissue = data;
      },
      error => console.log(error)
    );

  }



// for pagination......................
next() {
  this.p++;
  this.servicesService.getIssuesList(this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listissues = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
  console.log('next button', this.p);
  this.checking();
  this.nextchecking();
  }
previous() {
    console.log('before', this.p);
    this.p--;
    this.servicesService.getIssuesList(this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listissues = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    this.checking();
    this.nextchecking();
    console.log('after', this.p);
  }
checking() {
    if (this.p === 1) {
      this.check = true;
      console.log('if issup is 0', this.check);
    } else {
      this.check = false;
      console.log('if issuep is not 0', this.check);

    }

  }
nextchecking() {
 console.log('count for pagination', Math.floor(this.count / 8) );
    if (this.p === Math.floor(this.count / 12) + 1 ) {

      this.checknext = true;
      console.log('if issuen is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if issuen is not 0', this.checknext);

    }
  }

// end of pagination code........................
}
