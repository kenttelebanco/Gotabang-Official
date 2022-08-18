import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { imageType } from './imageType';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'https://6229-114-108-244-90.ngrok.io/';
  
    constructor(private http: HttpClient) { }
  
  
  // classifyImage(imgUrl:any){
  //   let params = new HttpParams()
  //   .set('image', imgUrl)
  //   return this.http.get(this.url, { params});
  // }

  classifyImage(imgUrl:any){
    return this.http.get<imageType[]>(this.url+`?image=${imgUrl}`)
  }

  
}
