import { Component, OnInit } from '@angular/core';
import { MovieService } from '../Services/movie.service';

@Component({
  selector: 'app-movie2',
  templateUrl: './movie2.page.html',
  styleUrls: ['./movie2.page.scss'],
})
export class Movie2Page implements OnInit {
  MovieData: any = [];

  constructor(private movieBTTF: MovieService) { }

  ngOnInit() {

    this.movieBTTF.GetBTTFData().subscribe(
      (data) => {
        this.MovieData = data.Search;
      }
    );
  }

}
