import { Component, Input, OnInit } from '@angular/core';
import { Breed } from 'src/models/breed.model';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss'],
})
export class DogCardComponent implements OnInit {
  @Input() breed: Breed | null = null;
  constructor() {}

  ngOnInit(): void {}
}
