import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Test2Component } from './test2/test2.component';
import { Test2aComponent } from './test2a/test2a.component';
import { Test2bComponent } from './test2b/test2b.component';
import { Test2cComponent } from './test2c/test2c.component';
import { LandingRouteGuard } from './landing-route-guard';
import { LeavingRouteGuard } from './leaving-route-guard';
import { Test3Component } from './test3/test3.component';
import { Test3aComponent } from './test3a/test3a.component';
import { Test3bComponent } from './test3b/test3b.component';
import { Test4Component } from './test4/test4.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'test2'},
  {
    path: 'test2',
    component: Test2Component,
    children: [
        { path: 'test2a', component: Test2aComponent }
    ]
  },
  {
    path: 'test2b/:id',
    component: Test2bComponent,
    canActivate: [LandingRouteGuard],
    canDeactivate: [LeavingRouteGuard]
  },
  { path: 'test2c', component: Test2cComponent, outlet: 'aux' }, // auxiliary route
  { path: 'test1', loadChildren: './test1/test1.module#Test1Module' }, // lazy loading http://localhost:4200/test1
  {
    path: 'test3',
    children: [
        {
            path: ':id',
            children: [
                {
                    path: '',
                    component: Test3Component,
                },
                {
                    path: 'test3a/:id', // http://localhost:4200/test3/aaa/test3a/a
                    component: Test3aComponent
                },
                {
                    path: 'test3b/:id',
                    component: Test3bComponent
                }
            ]
        }
    ]
  },
  { path: 'test4', component: Test4Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
