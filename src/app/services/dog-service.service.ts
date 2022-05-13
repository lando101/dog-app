import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Breed } from 'src/models/breed.model';

export interface Params {
  size?: string;
  order?: string;
  limit?: string;
  breed_id?: string;
}

const routes = {
  breeds: () => '/get_breeds',
  searchBreeds: (breed: string) => `/search_breed?breed=${breed}`,
  breedImages: (breed: Params) => `/breed_images?breed=${breed}`,
  randomFact: () => '/get_random_fact',
};

@Injectable({
  providedIn: 'root',
})
export class DogServiceService {
  public breeds = new Subject<Breed[]>();

  constructor(private httpClient: HttpClient) {}

  // breeds
  get_breeds(): Observable<any> {
    return this.httpClient.get(routes.breeds()).pipe(
      map((body: any) => {
        this.breeds.next(body);
        return body;
      }),
      catchError(() => of('Error, could not load breeds :-('))
    );
  }

  search_breeds(breed: string): Observable<any> {
    let params = new HttpParams();
    params.set('_breed', breed);
    return this.httpClient.get(routes.searchBreeds(breed), { params: params }).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load breed :-('))
    );
  }

  // random facts
  get_random_fact(): Observable<any> {
    return this.httpClient.get(routes.randomFact()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load fact :-('))
    );
  }

  // get_breed_imgs(): Observable<any>{

  // }
}
