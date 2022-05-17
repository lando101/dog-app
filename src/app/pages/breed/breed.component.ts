import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogServiceService } from '@app/services/dog-service.service';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.scss'],
})
export class BreedComponent implements OnInit {
  breed_slug: string = '';
  breed_name: string = '';
  constructor(private router: ActivatedRoute, private dogService: DogServiceService) {}

  ngOnInit(): void {
    this.extract_url_info();
  }

  async extract_url_info() {
    const breed_slug = this.router.snapshot.paramMap.get('id');
    this.breed_slug = breed_slug ?? '';
    this.breed_name = this.breed_slug.replace('-', ' ');

    this.get_breed_wiki();
  }

  get_breed_wiki() {
    this.dogService.get_breed_wiki(this.breed_name).subscribe((data: any) => {
      console.log('wiki dog', data);
    });
  }
}
