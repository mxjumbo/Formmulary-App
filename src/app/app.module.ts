import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import {File} from '@ionic-native/file/ngx';
import {FileOpener}from '@ionic-native/file-opener/ngx';
import { Platform } from '@ionic/angular';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    DocumentViewer,File, FileOpener, Platform
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
