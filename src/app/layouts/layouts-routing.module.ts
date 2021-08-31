import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
    data: {
      title: 'Portfolio Page'
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
