import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchNavbarComponent } from './search-navbar/search-navbar.component';
import { FormComponent } from './form/form.component';
import { DateCountPipe } from './date-count.pipe';
import { GithubFinderService } from './github-finder.service'

@NgModule({
  declarations: [
    AppComponent,
    SearchNavbarComponent,
    FormComponent,
    DateCountPipe,
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
