import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetallePage } from '../pages/detalle/detalle';

import {PeliculaLocalService} from '../providers/peliculaLocal'
import {PeliculaNodeService} from '../providers/peliculaNode'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage
  ],
  providers: [PeliculaLocalService,PeliculaNodeService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
