import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  MovieData:any=[];

  constructor(private movieService:MovieService) { }

  //Returning the movie data to be displayed
  ngOnInit() {

    this.movieService.GetMovieData().subscribe(
      (data)=>{
        this.MovieData = data.Search;
      }
    );

  }

}
