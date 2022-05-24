import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/models/breed.model';
export interface Order {
  name: string;
  value: number;
}
@Component({
  selector: 'app-dog-tabs',
  templateUrl: './dog-tabs.component.html',
  styleUrls: ['./dog-tabs.component.scss'],
})
export class DogTabsComponent implements OnInit {
  @Input() breeds: Breed[] = [];

  selected_str: string = 'A to Z';
  public isCollapsed = true;
  order: Order[] = [
    { name: 'A to Z', value: 1 },
    { name: 'Z to A', value: 2 },
    { name: 'Lightest', value: 3 },
    { name: 'Heaviest', value: 4 },
  ];

  page = 1;
  pageSize = 12;

  model = 1;
  constructor() {}

  ngOnInit(): void {}

  paginate() {
    // this.allCitations =  this.citations
    //  .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
