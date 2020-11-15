import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubFinderService } from './github-finder.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchNavbarComponent } from './search-navbar/search-navbar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchNavbarComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
