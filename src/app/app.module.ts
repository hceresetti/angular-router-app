import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MultTableComponent } from './mult-table/mult-table.component';
import { MultTableDetailsComponent } from './mult-table-details/mult-table-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AndrebuenoComponent } from './andrebueno/andrebueno.component';
import { TimerComponent } from './timer/timer.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AndrebuenoComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'tabuada', component: TabuadaComponent },
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MultTableComponent,
    MultTableDetailsComponent,
    AndrebuenoComponent,
    TimerComponent,
    TabuadaComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
