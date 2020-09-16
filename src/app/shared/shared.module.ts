import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { AboutComponent } from '../pages/about/about.component';
import { WorkHistoryComponent } from '../pages/work-history/work-history.component';

const sharedModules = [];

const sharedComponents = [AboutComponent, WorkHistoryComponent];

@NgModule({
  declarations: [sharedComponents],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
})
export class SharedModule {}
