import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as auth0 from 'auth0-js';
import { BrawlStarsService } from './brawl-stars.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  APIauthKey: string;
  authenticated: boolean;
  userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token id_token',
    redirectUri: environment.auth.redirect,
    scope: environment.auth.scope
  });

  constructor(public router: Router, private http: HttpClient, private brawlservice: BrawlStarsService) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
    this.getAccessToken();
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  private APIkey;
  get apiKey(): string {
    return this.APIkey
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setAPIauthKey().subscribe( res => { 
          let key: response = res; 
          this.APIkey = key.access_token;
          this.brawlservice.header = {headers: new HttpHeaders().set('Authorization',`Bearer ${this.apiKey}`)};
        })
        this.getUserInfo(authResult);
      } else if (err) {
        this.router.navigate(['/Login']);
        console.log(err);
      }
    });
  }
  private body = { grant_type: 'client_credentials',
  client_id: '43jqR6UG5VGwiFkh0pRtD84rFMzSPcYC',
  client_secret: 'O-7e6pRP-nKNsDEkJ1vB5_-5FtpL47jaHV31h4gvrolqflqjcTUMlpzXPmzQQo4J',
  audience: 'https://projectAPI'}

  public setAPIauthKey(){
    return this.http.post<response>(`https://dev-yr87fs94.eu.auth0.com/oauth/token`,this.body)
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.getUserInfo(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    // Remove tokens and expiry time
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    
    this.auth0.logout({
      returnTo: 'http://localhost:4200/Login',
      clientID: environment.auth.clientID
    });
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this._accessToken && Date.now() < this._expiresAt;
  }

  getAccessToken() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
    });
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this._expiresAt = authResult.expiresIn * 1000 + Date.now();
    this._accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
    this.router.navigate(['/home']);
  }

  get isLoggedIn(): boolean {
    return Date.now() < this._expiresAt && this.authenticated;   
  }
}

export const environment = {
  production: false,
  auth: {
    clientID: 'hPBUnPMk5FN6fjAbfDo0ctBwyeo4FNB8',
    domain: 'dev-yr87fs94.eu.auth0.com',
    audience: 'http://localhost:4200',
    redirect: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  }
};

export interface response {
  access_token: string;
  expires_in: number;
  token_type: string;
}