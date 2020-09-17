import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { NavComponent } from './components/nav/nav.component';
import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [AppComponent, NavComponent, GameComponent],
  imports: [AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
