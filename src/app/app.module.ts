import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { AddComponent } from './add/add.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { PlusComponent } from './plus/plus.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlusComponent,
    ListComponent,
    AddComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
