import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedComponent } from './breed.component';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

// const routes: Routes = [{ path: '', component: BreedComponent }];
const routes: Routes = [{ path: '', component: BreedComponent, data: { title: marker('Breed') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedRoutingModule {}
