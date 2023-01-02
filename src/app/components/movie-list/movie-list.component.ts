import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [MovieService]
})

export class MovieListComponent implements OnInit {
  
  public movies!: Movie[];

  constructor(
    private _moviesService: MovieService
  ){
    this.movies = _moviesService.getMovies();
  }

  ngOnInit(): void {
    
  }
}
