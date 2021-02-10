import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CharacterComponent } from './components/character/character.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PopupComponent } from './components/popup/popup.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoggedGuard } from './guards/logged.guard';

const routes: Routes = [
  {path:'popupAlert', component:PopupComponent, outlet:'popup'},
  {path:'home', component:HomeComponent, canActivate:[LoggedGuard]},
  // {path:'characters', component:CharactersComponent},
  // {path:'character/:id', component:CharacterComponent},
  {path:'login', component: AuthenticationComponent},

  {path:'**', component:HomeComponent, pathMatch:'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
