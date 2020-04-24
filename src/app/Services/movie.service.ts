import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient,private lotr:HttpClient,private bttf:HttpClient) { }

  GetMovieData():Observable<any>{
    return this.httpClient.get('http://omdbapi.com/?i=tt3896198&apikey=cf31a5e3&s=%27star%20wars%27');
  }

  GetLOTRData():Observable<any>{
    return this.httpClient.get('http://omdbapi.com/?i=tt3896198&apikey=cf31a5e3&s=%27Lord%20of%20the%20Rings%27');
  }

  GetBTTFData():Observable<any>{
    return this.httpClient.get('http://omdbapi.com/?i=tt3896198&apikey=cf31a5e3&s=%27Back%20to%20the%20Future%27');
  }
}
