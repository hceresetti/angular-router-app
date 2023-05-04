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
import { HenryceresettiComponent } from './henryceresetti/henryceresetti.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';
import { MultComponent } from './mult/mult.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HenryceresettiComponent },
      { path: 'timer', component: TimerComponent },
      { path: 'mult', component: MultComponent },
    ]),
  ],
  declarations: [
    RootComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    MultTableComponent,
    MultTableDetailsComponent,
    HenryceresettiComponent,
    TimerComponent,
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
