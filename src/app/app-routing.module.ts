import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { WorkHistoryComponent } from './pages/work-history/work-history.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'work-history', component: WorkHistoryComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
