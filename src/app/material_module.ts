import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule , MatCardModule , MatTableModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule , MatCardModule, MatTableModule, MatSlideToggleModule],
  exports: [MatButtonModule, MatToolbarModule , MatCardModule , MatTableModule, MatSlideToggleModule],
})
export class MaterialModule {
}
