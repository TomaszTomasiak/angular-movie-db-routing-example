import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
 
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url)
    .pipe(tap(console.log))
  }

  //Dodatkowe konfiguracje w zapytaniu
  // getMovies(): Observable<HttpResponse<Movie[]>>{
  //   return this.http.get<HttpResponse<Movie[]>>(this.url, {observe: 'response'})
  //   .pipe(tap(console.log))
  // }

  postMovie(movie: Movie) {
   return this.http.post(this.url, movie)
    .pipe(tap(console.log));
  }

  putMovie(movie: Movie) {
    return this.http.put(this.url + '/' + movie.id, movie)
     .pipe(tap(console.log));
   }

   patchMovie(movie: Partial<Movie>) {
    return this.http.patch(this.url + '/' + movie.id, movie)
     .pipe(tap(console.log));
   }
}
