import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const NG_COMMON_MODULES = [FormsModule, RouterLink, RouterOutlet];
const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatSlideToggleModule
];

const ALL_MODULES = [...NG_COMMON_MODULES, ...MATERIAL_MODULES];

@NgModule({
  imports: ALL_MODULES,
  exports: ALL_MODULES
})
export class AppCommonModule {}
