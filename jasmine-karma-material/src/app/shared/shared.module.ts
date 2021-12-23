import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatSliderModule, MatCardModule],
  exports: [MatButtonModule, MatSliderModule, MatCardModule],
})
export class SharedModule {}
