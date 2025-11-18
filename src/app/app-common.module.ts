import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const NG_COMMON_MODULES = [RouterOutlet];
const MATERIAL_MODULES = [MatCardModule, MatCheckboxModule, MatSlideToggleModule];

const ALL_MODULES = [...NG_COMMON_MODULES, ...MATERIAL_MODULES];

@NgModule({
  imports: ALL_MODULES,
  exports: ALL_MODULES
})
export class AppCommonModule {}
