import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotoComponent } from '../photo/photo.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { filterByDescription } from './filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    LoadButtonComponent,
    filterByDescription
  ]
})
export class PhotoListModule { }
