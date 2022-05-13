import { Component, OnInit } from '@angular/core';
import { DogServiceService } from '@app/services/dog-service.service';
import FuzzySearch from 'fuzzy-search';
import { FilterByPipe, GroupByPipe } from 'ngx-pipes';
import { debounceTime, map, Observable, OperatorFunction } from 'rxjs';
import { Breed } from 'src/models/breed.model';
// import { FuzzySearch } from 'fuzzy-search';
// const FuzzySearch = require("fuzzy-search");

@Component({
  selector: 'app-search-dogs',
  templateUrl: './search-dogs.component.html',
  styleUrls: ['./search-dogs.component.scss'],
  providers: [FilterByPipe, GroupByPipe],
})
export class SearchDogsComponent implements OnInit {
  results: Breed[] = [];
  breeds: Breed[] = [];

  searchStr: string = '';
  filtersList: any[] = [];
  constructor(private dogService: DogServiceService, private filter: FilterByPipe, private groupBy: GroupByPipe) {}

  ngOnInit(): void {
    this.dogService.breeds.subscribe((breeds: Breed[]) => {
      this.breeds = breeds;
      // this.groupBreedGroup()
      // this.groupBreedOrigin()
      console.log('search breeds', breeds);
    });
  }

  // filter based on checkbox selection
  filterBy() {
    const filter = this.filter.transform(this.breeds, ['publisher', 'media_type'], this.searchStr);
    this.results = filter;
    if (this.searchStr) {
      this.search(this.searchStr);
    }
    console.log('filter', this.results);
  }

  // group by breed group
  // groupBreedGroup(){
  //   const group = this.groupBy.transform(this.breeds, 'breed_group');
  //   console.log('group',group);
  // }

  // group by breed group
  // groupBreedOrigin(){
  //   const group = this.groupBy.transform(this.breeds, 'life_span');
  //   console.log('group',group);
  // }

  // search either filtered dogs or all
  search(search_str: string) {
    const keys = ['name', 'origin', 'breed_group'];
    const searcher = new FuzzySearch(this.breeds, keys, {
      caseSensitive: false,
      sort: true,
    });
    const result = searcher.search(search_str);
    console.log(result);

    return result;
  }

  search_ngb: OperatorFunction<string, readonly Breed[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map((term) => (term === '' ? [] : this.search(term).slice(0, 10)))
    );
  formatter = (x: { name: string }) => x.name;
}
