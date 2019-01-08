import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as Constants from '../app/constants';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {}

// login...................................
validateLogin(login: Object): Observable<Object> {
  return this.http.post(Constants.CONSTANTS.API_LOGIN + 'validateLogin', login);
}

// news content.....................................
getContentList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getNewsContent/' + p);
}
deletecontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteContent/' + id);
}
editcontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editContent/' + id);
}

editrewardsbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editRewards/' + id);
}
viewcontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewContent/' + id);
}
viewrewardbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewReward/' + id);
}
// news gallery.....................................

getNewsGalleryList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getNewsGallery/' + p);
}
deletenewsgallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteGallery/' + id);
}
editnewsgallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editGallery/' + id);
}
viewnewsgallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewGallery/' + id);
}
viewgallrewardbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewReward/' + id);
}
editgallrewardsbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editRewards/' + id);
}
// news videos.....................................

getNewsVideosList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getNewsVideos/' + p);
}
deletenewsVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteVideos/' + id);
}
editnewsVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editVideos/' + id);
}
viewnewsVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewVideos/' + id);
}
viewvideorewardbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewReward/' + id);
}
editvideorewardsbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editRewards/' + id);
}

// polls..............................................
getPollsList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getPolls/' + p);

}
viewpollsbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewpollsdata/' + id);
}
deletepollbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deletepolls/' + id);
}
editpollsbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editpolls/' + id);
}

// ides..............................
getIdeasList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getideadata/' + p);
}
viewideasbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewideadata/' + id);
}

// issues..............................
getIssuesList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getissuedata/' + p);

}
viewissuebyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'viewissuedata/' + id);
}

//  shop.....................................
getShopList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getshop/' + p);
}
deleteshopbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteshop/' + id);
}
editshopbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editshop/' + id);
}
viewshopbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewshop/' + id);
}





// history content.....................................
gethistoryContentList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getHistoryContent/' + p);
}
deletehistorycontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteContent/' + id);
}
edithistorycontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editContent/' + id);
}
viewhistorycontentbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewHistoryContent/' + id);
}

// history gallery.....................................

gethistoryGalleryList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getHistoryGallery/' + p);

}
deletehistorygallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteGallery/' + id);
}
edithistorygallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editGallery/' + id);
}
viewhistorygallerybyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewGallery/' + id);
}

// history videos.....................................

gethistoryVideosList(p): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT + 'getHistoryVideos/' + p);
}
deletehistoryVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'deleteVideos/' + id);
}
edithistoryVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'editVideos/' + id);
}
viewhistoryVideosbyid(id): Observable<any> {
  return this.http.get(Constants.CONSTANTS.API_ENDPOINT  + 'viewVideos/' + id);
}


}
