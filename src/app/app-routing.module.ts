import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './layouts/resume/resume.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
