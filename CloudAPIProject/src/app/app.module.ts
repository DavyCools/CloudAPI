import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import {FormsModule} from '@angular/forms';


import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule, Button} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieAPIComponent } from './movie-api/movie-api.component';
import { OwnAPIComponent } from './own-api/own-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MovieService } from './Common/movie.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieAPIComponent,
    OwnAPIComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home", component: HomeComponent},
      {path:"MovieAPI", component: MovieAPIComponent},
      {path:"OwnAPI", component: OwnAPIComponent},
      {path: "", redirectTo: "home", pathMatch:"full" },
      {path: "**", component: PageNotFoundComponent}
    ]),
    ToolbarModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
