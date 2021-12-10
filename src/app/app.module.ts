import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { DanielehomeComponent } from './danielehome/danielehome.component';
import { DanielehistoryComponent } from './danielehistory/danielehistory.component';
import { DanieletimerService } from './danieletimer.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DanielehomeComponent },
      { path: 'historico', component: DanielehistoryComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    DanielehomeComponent,
    DanielehistoryComponent,
  ],
  bootstrap: [AppComponent],
  providers: [DanieletimerService],
})
export class AppModule {}
