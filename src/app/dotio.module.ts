import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { SocialsLargeComponent } from './components/socials-large/socials-large.component';
import { SocialsSmallComponent } from './components/socials-small/socials-small.component';
import { DotioRoutingModule } from './dotio-routing.module';
import { DotioComponent } from './dotio.component';
import { BannerComponent } from './layout/banner/banner.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    DotioComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    LayoutComponent,
    SocialsLargeComponent,
    SocialsSmallComponent
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
