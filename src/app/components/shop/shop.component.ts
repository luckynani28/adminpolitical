
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
import * as Constants from '../../constants';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  listshop; any;
  totalcount: any;
  count: any;
  p = 1;
  filesToUpload: Array<File> = [];
  ProductName: any;
  ProductDetails: any;
  ProductPrice: any;
  id: any;
  viewshop: any;
  editshop: any;
  checknext: any;
  check: any;
  constructor(private http: HttpClient, private servicesService: ServicesService) { }

  ngOnInit() {
    this.servicesService.getShopList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        localStorage.setItem('countshop', data.totalPages);
        this.listshop = data.pageContent;
        console.log('data from posters........... ', this.listshop);
      },
      error => console.log(error)
    );
    this.count = localStorage.getItem('countshop');
    this.checking();
    this.nextchecking();

  }

  onShop() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
      formData.append('productImage', files[i]);
      formData.append('productName', this.ProductName);
      formData.append('productDetails', this.ProductDetails);
      formData.append('productPrice', this.ProductPrice);
    }
    console.log('form data variable :   ' + formData.toString());
    this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'saveshop', formData) .subscribe(file => console.log('file', file));
    window.location.reload();
}
Save() {
  const formData: any = new FormData();
  const files: Array<File> = this.filesToUpload;
  console.log(files);
  for (let i = 0; i < files.length; i++) {
    formData.append('productImage', files[i]);
    formData.append('id', this.id);
    formData.append('productName', this.ProductName);
    formData.append('productDetails', this.ProductDetails);
    formData.append('productPrice', this.ProductPrice);
  }
  console.log('form data variable :   ' + formData.toString());
  this.http.post(Constants.CONSTANTS.API_ENDPOINT + 'editshopdata', formData) .subscribe(file => console.log('file', file));
  window.location.reload();
}

Image(fileInput: any) {
  this.filesToUpload = <Array<File>>fileInput.target.files;
}
name(fileInput: any) {
  this.ProductName = fileInput.target.value;
}
details(fileInput: any) {
  this.ProductDetails = fileInput.target.value;
}
price(fileInput: any) {
  this.ProductPrice = fileInput.target.value;
}
editId(fileInput: any) {
  this.id = fileInput.target.value;
}

// view item method
viewitemshop(id) {
  this.servicesService.viewshopbyid(id).subscribe(
    data => {
      this.viewshop = data;
    },
    error => console.log(error)
  );

}



// delete item method
  deleteitemshop(id) {
  this.servicesService.deleteshopbyid(id).subscribe(
    data => {
    },
    error => console.log(error)
  );
  window.location.reload();
}



// edit item method
edititemshop(id) {
  this.servicesService.editshopbyid(id).subscribe(
    data => {
      this.editshop = data;
      this.id = this.editshop.id;
      console.log('editdata...........................', this.editshop);
    },
    error => console.log(error)
  );
}


nextshop() {
  this.p++;
  this.servicesService.getShopList (this.p).subscribe(
    data => {
      this.totalcount = data.totalPages;
      this.listshop = data.pageContent;
      console.log('total count', this.totalcount);
    },
    error => console.log(error)
  );
  console.log('next button', this.p);
  this.checking();
  this.nextchecking();
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
    if ((this.p === Math.floor(this.count / 12) + 1) ) {

      this.checknext = true;
      console.log('if pn is 0', this.checknext);
    } else {
      this.checknext = false;
      console.log('if pn is not 0', this.checknext);

    }
  }


  previousshop() {
    console.log('before', this.p);
    this.p--;
    this.servicesService.getShopList (this.p).subscribe(
      data => {
        this.totalcount = data.totalPages;
        this.listshop = data.pageContent;
        console.log('total count', this.totalcount);
      },
      error => console.log(error)
    );
    this.checking();
    this.nextchecking();
    console.log('after', this.p);
  }




}
