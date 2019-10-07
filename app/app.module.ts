import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Module } from './test1/test1.module';
import { routing } from './app.routing';
import { Test2Component } from './test2/test2.component';
import { Test2aComponent } from './test2a/test2a.component';
import { Test2bComponent } from './test2b/test2b.component';
import { LandingRouteGuard } from './landing-route-guard';
import { LeavingRouteGuard } from './leaving-route-guard';
import { Test2cComponent } from './test2c/test2c.component';
import { Test3Component } from './test3/test3.component';
import { Test3aComponent } from './test3a/test3a.component';
import { Test3bComponent } from './test3b/test3b.component';
import { HttpClientModule } from '@angular/common/http';
import { TestServiceService } from './test-service.service';
import { Test4Component } from './test4/test4.component';

@NgModule({
  declarations: [
    AppComponent,
    Test2Component,
    Test2aComponent,
    Test2bComponent,
    Test2cComponent,
    Test3Component,
    Test3aComponent,
    Test3bComponent,
    Test4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Test1Module, // lazy loaded, no longer needed
    routing,
    HttpClientModule
  ],
  providers: [
    LandingRouteGuard,
    LeavingRouteGuard,
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
