import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { CompanySourceRoutingModule } from './company-source-routing.module';
import { FlexboxComponent } from './flexbox/flexbox.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CompanySourceRoutingModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class CompanySourceModule { }
