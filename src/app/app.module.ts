import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    HttpClientModule,
    CarouselModule,
    ScrollToModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'  })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
