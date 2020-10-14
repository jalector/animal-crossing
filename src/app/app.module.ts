import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { VillagersComponent } from './pages/villagers/villagers.component';
import { VillagerComponent } from './components/villager/villager.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BugsComponent } from './pages/bugs/bugs.component';
import { FishComponent } from './pages/fish/fish.component';
import { SongsComponent } from './pages/songs/songs.component';
import { FossilsComponent } from './pages/fossils/fossils.component';

@NgModule({
  declarations: [
    AppComponent,
    VillagersComponent,
    VillagerComponent,
    BugsComponent,
    FishComponent,
    SongsComponent,
    FossilsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
