import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import {FormsModule} from '@angular/forms';


import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RatingModule} from 'primeng/rating';
import {AccordionModule} from 'primeng/accordion';
import {SpinnerModule} from 'primeng/spinner';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CardModule} from 'primeng/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieAPIComponent } from './movie-api/movie-api.component';
import { OwnAPIComponent } from './own-api/own-api.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MovieService } from './Common/movie.service';
import { SettingsComponent } from './settings/settings.component';
import { BrawlStarsService } from './Common/brawl-stars.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './Common/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieAPIComponent,
    OwnAPIComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    SettingsComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"home", component: HomeComponent, canActivate: [AuthGuard]},
      {path:"MovieAPI", component: MovieAPIComponent, canActivate: [AuthGuard]},
      {path:"OwnAPI", component: OwnAPIComponent, canActivate: [AuthGuard]},
      {path:"Settings", component: SettingsComponent, canActivate: [AuthGuard]},
      {path:"Login", component: LoginComponent},
      {path:"callback", component: CallbackComponent},
      {path: "", redirectTo: "home", pathMatch:"full", canActivate: [AuthGuard]},
      {path: "**", component: PageNotFoundComponent, canActivate: [AuthGuard]}
    ]),
    ToolbarModule,
    ButtonModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RatingModule,
    AccordionModule,
    SpinnerModule,
    SelectButtonModule,
    MessagesModule,
    MessageModule,
    CardModule
  ],
  providers: [
    MovieService,
    BrawlStarsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
