import { Test1aComponent } from '../test1a/test1a.component';
import { Test1bComponent } from '../test1b/test1b.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Test1aComponent }, // default route of the module
  { path: 'test1a', component: Test1aComponent }, // lazy loading http://localhost:4200/test1/test1a
  { path: 'test1b', component: Test1bComponent } // lazy loading  http://localhost:4200/test1/test1b
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
