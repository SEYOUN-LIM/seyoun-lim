import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WorkHistoryComponent } from './pages/work-history/work-history.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'work-history', component: WorkHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
