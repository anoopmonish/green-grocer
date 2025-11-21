import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { JsonPipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const NG_COMMON_MODULES = [JsonPipe, FormsModule, RouterLink, RouterOutlet];
const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
];

const ALL_MODULES = [...NG_COMMON_MODULES, ...MATERIAL_MODULES];

@NgModule({
  imports: ALL_MODULES,
  exports: ALL_MODULES
})
export class AppCommonModule {}
