import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { PolicyListComponent } from '../policy-list/policy-list.component';
import { DotioCenterComponent } from './dotio-center/dotio-center.component';
import { DotioFooterComponent } from './dotio-footer/dotio-footer.component';
import { DotioNavigationComponent } from './dotio-navigation/dotio-navigation.component';
import { DotioRoutingModule } from './dotio-routing.module';
import { DotioComponent } from './dotio.component';
import { HomeComponent } from './pages/home/home.component';
import { UsesComponent } from './pages/uses/uses.component';

@NgModule({
  declarations: [
    DotioComponent,
    PolicyListComponent,
    HomeComponent,
    UsesComponent,
    DotioCenterComponent,
    DotioFooterComponent,
    DotioNavigationComponent,
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
