import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CompanySourceRoutingModule } from './company-source-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CompanySourceRoutingModule
  ],
  declarations: [ButtonsComponent]
})
export class CompanySourceModule { }
