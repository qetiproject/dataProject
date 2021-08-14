import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from '.';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule],
  declarations: [NotFoundComponent, HeaderComponent],
  exports: [HeaderComponent],
})
export class ShellModule {}
