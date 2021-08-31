import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module'
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AngularTiltModule } from 'angular-tilt';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxMasonryModule } from 'ngx-masonry';

// Resume Layout
import { ResumeComponent } from './resume/resume.component';
import { ResumeNavComponent } from './resume/resume-nav/resume-nav.component';
import { ResumeHeaderComponent } from './resume/resume-header/resume-header.component';
import { ResumeAboutComponent } from './resume/resume-about/resume-about.component';
import { ResumeServicesComponent } from './resume/resume-services/resume-services.component';
import { ResumePortfolioComponent } from './resume/resume-portfolio/resume-portfolio.component';
import { ResumeCounterComponent } from './resume/resume-counter/resume-counter.component';
import { ResumeScheduleComponent } from './resume/resume-schedule/resume-schedule.component';
import { ResumePricingComponent } from './resume/resume-pricing/resume-pricing.component';
import { ResumeSubscribeComponent } from './resume/resume-subscribe/resume-subscribe.component';
import { ResumeFooterComponent } from './resume/resume-footer/resume-footer.component';


//Portfolio Layout
import { PortfolioMetroComponent } from './portfolio-metro/portfolio-metro.component';
import { PortfolioHeaderComponent } from './portfolio-metro/portfolio-header/portfolio-header.component';
import { PortfolioBreadcrumbComponent } from './portfolio-metro/portfolio-breadcrumb/portfolio-breadcrumb.component';
import { PortfolioGalleryComponent } from './portfolio-metro/portfolio-gallery/portfolio-gallery.component';
import { PortfolioFooterComponent } from './portfolio-metro/portfolio-footer/portfolio-footer.component';
import { PortfolioCopyrightComponent } from './portfolio-metro/portfolio-copyright/portfolio-copyright.component';
import { FashionComponent } from './portfolio-metro/portfolio-gallery/fashion/fashion.component';
import { BagsComponent } from './portfolio-metro/portfolio-gallery/bags/bags.component';
import { ShoesComponent } from './portfolio-metro/portfolio-gallery/shoes/shoes.component';
import { WatchComponent } from './portfolio-metro/portfolio-gallery/watch/watch.component';
import { GalleryComponent } from './portfolio-metro/portfolio-gallery/gallery/gallery.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    ResumeComponent, ResumeNavComponent, ResumeHeaderComponent, ResumeAboutComponent, ResumeServicesComponent, ResumePortfolioComponent, ResumeCounterComponent, ResumeScheduleComponent, ResumePricingComponent, ResumeSubscribeComponent, ResumeFooterComponent, PortfolioMetroComponent, PortfolioGalleryComponent, PortfolioHeaderComponent, PortfolioBreadcrumbComponent, PortfolioFooterComponent, PortfolioCopyrightComponent, FashionComponent, BagsComponent, ShoesComponent, WatchComponent, GalleryComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    GalleryModule.forRoot(),
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    NgxMasonryModule
  ],

  exports: [],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
