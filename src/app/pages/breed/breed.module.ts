import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreedRoutingModule } from './breed-routing.module';
import { BreedComponent } from './breed.component';

@NgModule({
  declarations: [BreedComponent],
  imports: [CommonModule, BreedRoutingModule],
})
export class BreedModule {}
