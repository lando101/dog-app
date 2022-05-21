import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '@app/services/dog-service.service';
import { get_breeds } from 'functions/src';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  fact: string | undefined;
  breeds: any[] = [];
  isLoading = false;

  constructor(private quoteService: QuoteService, private dogService: DogServiceService) {}

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService
    //   .getRandomQuote({ category: 'dev' })
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((quote: string) => {
    //     this.quote = quote;
    //   });
    this.getBreeds();
    // this.searchBreeds();
  }
  getBreeds() {
    this.dogService
      .get_breeds()
      .pipe(
        finalize(() => {
          // this.isLoading = false;
          this.getRandomFact();
        })
      )
      .subscribe((breeds) => {
        this.breeds = breeds;
        // this.getRandomFact();
        console.log('breeds', breeds);
      });
  }

  // searchBreeds(query?: string) {
  //   this.dogService
  //     .search_breeds(query ? query : 'greyhound')
  //     .pipe(
  //       finalize(() => {
  //         this.isLoading = false;
  //       })
  //     )
  //     .subscribe((breeds) => {
  //       this.breeds = breeds;
  //       console.log('search breeds', breeds);
  //     });
  // }

  getRandomFact() {
    this.dogService
      .get_random_fact()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((fact) => {
        this.fact = fact.facts[0];
        console.log('facts', fact);
      });
  }
}
