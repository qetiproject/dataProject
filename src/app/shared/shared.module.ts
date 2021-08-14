import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent, LoadingSpinnerComponent } from './loading';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule],
  declarations: [LoadingComponent, LoadingSpinnerComponent],
  exports: [LoadingComponent, TranslateModule],
})
export class SharedModule {}
