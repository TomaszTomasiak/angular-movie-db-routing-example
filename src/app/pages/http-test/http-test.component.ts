import { Component, OnInit } from '@angular/core';
import { HttpMoviesService } from 'src/app/services/http-movies.service';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  errorMessage: string;
  constructor(private http: HttpMoviesService) {}

  get() {
    this.http.getMovies().subscribe({error: (err: string) => (this.errorMessage = err)
    });
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

    this.http.postMovie(movie).subscribe({error: (err: string) => (this.errorMessage = err)
    });
  }

  put() {
    const movie: Movie = {
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

  this.http.putMovie(movie).subscribe({error: (err: string) => (this.errorMessage = err)
  });
}

  patch() {
    const movie: Partial<Movie> = {
      id: '54',
           plot: 'Geralt szuka Ciri.',
    };
  
    this.http.patchMovie(movie).subscribe({error: (err: string) => (this.errorMessage = err)
    });
  }

  delete() {
    this.http.deleteMovie('54').subscribe({error: (err: string) => (this.errorMessage = err)
    });
  }

  error(){
    this.http
    .makeError()
    .subscribe({error: (err: string) => (this.errorMessage = err)
    });
  }

  headers() {
    this.http.headers().subscribe();
  }

  params() {
    this.http.params().subscribe();
  }

}
