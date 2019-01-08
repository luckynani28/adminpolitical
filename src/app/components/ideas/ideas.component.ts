import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../../services.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  viewidea: any;
  totalcount: any;
  listideas: any;
  p = 1;
  check: any;
  checknext: any;
  count: any;
  constructor( private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getIdeasList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('countidea', data.totalPages);
        this.listideas = data.pageContent;
        console.log('data from ideas........... ', this.listideas);
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('countidea');
    this.checking();
    this.nextchecking();
  }
  viewideadata(id) {
    this.servicesService.viewideasbyid(id).subscribe(
      data => {
        this.viewidea = data;
      },
      error => console.log(error)
    );

  }

  // for pagination......................
next() {
  this.p++;
  this.servicesService.getIdeasList(this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listideas = data.pageContent;
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
    this.servicesService.getIdeasList(this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listideas = data.pageContent;
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
      console.log('if pp is 0', this.check);
    } else {
      this.check = false;
      console.log('if pp is not 0', this.check);

    }

  }
nextchecking() {
 console.log('count for pagination', Math.floor(this.count / 8) );
    if (this.p === Math.floor(this.count / 12) + 1 ) {

      this.checknext = true;
      console.log('if pn is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if pn is not 0', this.checknext);

    }
  }

// end of pagination code........................
}
