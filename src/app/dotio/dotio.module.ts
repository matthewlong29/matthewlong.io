import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { DotioRoutingModule } from './dotio-routing.module';
import { DotioComponent } from './dotio.component';
import { BannerComponent } from './banner/banner.component';
import { BackgroundComponent } from './background/background.component';

@NgModule({
  declarations: [
    DotioComponent,
    BannerComponent,
    BackgroundComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    DotioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [DotioComponent]
})
export class DotioModule { }
