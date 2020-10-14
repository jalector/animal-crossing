import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BugsComponent } from './pages/bugs/bugs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FishComponent } from './pages/fish/fish.component';
import { FossilsComponent } from './pages/fossils/fossils.component';
import { SongsComponent } from './pages/songs/songs.component';
import { VillagersComponent } from './pages/villagers/villagers.component';

const routes: Routes = [
    {path: "villagers", component: VillagersComponent },
    {path: "bugs", component: BugsComponent },
    {path: "fish", component: FishComponent },
    {path: "songs", component: SongsComponent },
    {path: "fossils", component: FossilsComponent },
    {path: "**", component: VillagersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }