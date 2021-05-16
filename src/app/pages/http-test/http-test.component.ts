import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie = {
      title: 'Wiedźmin',
      year: '2001',
      category: 'Fantasy',
      director: 'Marek Brodzki',
      plot: 'Zabójca potworów musi wybrać mniejsze zło.',
      poster: null,
      country: 'Poland',
      imdbRating: '10.0',
    };

    this.http.postMovie(movie).subscribe();
  }

  put() {const movie: Movie = {
    id: '54',
    title: 'Wiedźmin 2',
    year: '2001',
    category: 'Fantasy',
    director: 'Marek Brodzki',
    plot: 'Zabójca potworów musi wybrać mniejsze zło.',
    poster: null,
    country: 'Poland',
    imdbRating: '10.0',
  };

  this.http.putMovie(movie).subscribe();}

  patch() {}

  delete() {}
}
