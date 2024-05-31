import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [

 {path: 'list', component: CharacterListComponent },
  { path: 'detail/:characterId', component: CharacterDetailComponent },
  { path: 'logslist', component: LogsComponent },
//  ,{ path: '', redirectTo: '/list', pathMatch: 'full' } // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
