import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../../services.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as Constants from '../../constants';
@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
p = 1;
totalcount: any;
listpolls: any;
viewpoll: any;
subject: any;
optionvalue: any;
editpolls: any;
id: any;
check: any;
count: any;
checknext: any;
fieldArray: Array<any> = [
  {

  },

];
fieldArrayedit: Array<any> = [
  {

  },

];
newAttribute: any = {};
firstField = true;
firstFieldName = 'First Item name';
isEditItems: boolean;
edititems: boolean;
constructor(private http: HttpClient, private servicesService: ServicesService) { }
ngOnInit() {
    this.servicesService.getPollsList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('countpolls', data.totalPages);
        this.listpolls = data.pageContent;
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('countpolls');
    this.checking();
    this.nextchecking();
}


  // view item method
viewitem(id) {
  this.servicesService.viewpollsbyid(id).subscribe(
    data => {
      this.viewpoll = data;
    },
    error => console.log(error)
  );

}

// delete item method
deleteitem(id) {
  this.servicesService.deletepollbyid(id).subscribe(
    data => {
    },
    error => console.log(error)
  );
  window.location.reload();
}
// edit item method
edititem(id) {
  this.servicesService.editpollsbyid(id).subscribe(
    data => {
      this.editpolls = data;
      this.id = this.editpolls.id;
      console.log('editdata...........................', this.editpolls);
    },
    error => console.log(error)
  );
}


subjectnews(fileInput: any) {
  this.subject = fileInput.target.value;
}
option(fileInput: any) {
  this.optionvalue = fileInput.target.value;
}
editId(fileInput: any) {
  this.id = fileInput.target.value;
}


// for radio button data................
addFieldValue(index) {
  if (this.fieldArray.length <= 6) {
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  } else {

  }
}
deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
}
onEditCloseItems() {
  this.isEditItems = !this.isEditItems;
}
addFieldValueEdit(index) {
  if (this.fieldArrayedit.length <= 6) {
    this.fieldArrayedit.push(this.newAttribute);
    this.newAttribute = {};
  } else {

  }
}

EditCloseItems() {
  this.edititems = !this.edititems;
}
deleteOptionedit(index) {
  this.fieldArrayedit.splice(index, 1);
}
onSubmit() {
  const formData: any = new FormData();
  const files: Array<File> = this.fieldArray;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    formData.append('optionvalues', files[i].name);
  }
  formData.append('subject', this.subject);
  formData.append('count', this.optionvalue);
  console.log('form data variable :   ' + formData);
  this.http.post( Constants.CONSTANTS.API_ENDPOINT + 'savePollsdata', formData) .subscribe(file => console.log('file', files));
}
// end of radio button code...................


save() {
  const formData: any = new FormData();
  const files: Array<File> = this.fieldArrayedit;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    formData.append('optionvalues', files[i].name);
  }
  formData.append('subject', this.subject);
  formData.append('count', this.optionvalue);
  formData.append('id', this.id);
  console.log('form data variable :   ' + formData);
  this.http.post( Constants.CONSTANTS.API_ENDPOINT + 'editpollsdata', formData) .subscribe(file => console.log('file', files));
}




// for pagination......................
next() {
  this.p++;
  this.servicesService.getPollsList(this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listpolls = data.pageContent;
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
    this.servicesService.getPollsList(this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listpolls = data.pageContent;
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
