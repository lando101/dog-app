import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { SearchDogsComponent } from './components/search-dogs/search-dogs.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    NgbModule,
    FlexLayoutModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  declarations: [LoaderComponent, SearchDogsComponent],
  exports: [LoaderComponent, SearchDogsComponent],
})
export class SharedModule {}
