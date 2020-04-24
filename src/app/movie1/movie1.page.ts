import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.page.html',
  styleUrls: ['./movie1.page.scss'],
})
export class Movie1Page implements OnInit {
  MovieData: any = [];

  constructor(private movieLOTR: MovieService) { }

  //Returning the movie data to be displayed
  ngOnInit() {

    this.movieLOTR.GetLOTRData().subscribe(
      (data) => {
        this.MovieData = data.Search;
      }
    );
  }

}
