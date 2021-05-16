import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Movie } from '../models/movie';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {
 
  private url = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.url)
    .pipe(tap(console.log), catchError(this.handleErrors))
  }

  //Dodatkowe konfiguracje w zapytaniu
  // getMovies(): Observable<HttpResponse<Movie[]>>{
  //   return this.http.get<HttpResponse<Movie[]>>(this.url, {observe: 'response'})
  //   .pipe(tap(console.log))
  // }

  postMovie(movie: Movie) {
   return this.http.post(this.url, movie)
    .pipe(tap(console.log), catchError(this.handleErrors));
  }

  putMovie(movie: Movie) {
    return this.http.put(this.url + '/' + movie.id, movie)
     .pipe(tap(console.log), catchError(this.handleErrors));
   }

   patchMovie(movie: Partial<Movie>) {
    return this.http.patch(this.url + '/' + movie.id, movie)
     .pipe(tap(console.log), catchError(this.handleErrors));
   }

   deleteMovie(id: string): Observable<{}>{
     return this.http
     .delete<{}>(this.url + '/' + id)
     .pipe(tap(console.log), catchError(this.handleErrors));
   }

   makeError(): Observable<HttpErrorResponse> {
     return this.http
     .delete(this.url + '/' + 999)
     .pipe(tap(console.log), catchError(this.handleErrors));
   }

   private handleErrors(error: HttpErrorResponse): Observable<never> {
     console.error(
      `Name: ${error.name} \n` +
      `Message: ${error.message} \n` +
      `Returned code: ${error.status} \n`
     );
     return throwError('Something bad happend; please try again later.');
   }
 }
