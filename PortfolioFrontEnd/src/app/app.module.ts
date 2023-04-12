import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { LogoutComponent } from './components/logout/logout.component';
import { StylingToolComponent } from './components/styling-tool/styling-tool.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtendedInfoComponent } from './components/extended-info/extended-info.component';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    MainInfoComponent,
    CursorComponent,
    LogoutComponent,
    StylingToolComponent,
    ExtendedInfoComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
