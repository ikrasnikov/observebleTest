import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TableComponent } from './table/table.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
