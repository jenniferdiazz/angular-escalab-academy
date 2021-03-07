import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Components*/
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material';
import { CardComponent } from './components/card/card.component';
import { ClickDirective } from './directives/handlerEvent/click.directive';
import { TrimPipe } from './pipes/trim.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
//import { CharactersModule} from './characters/characters.module';

import { PopupComponent } from './components/popup/popup.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AuthenticationComponent } from './components/authentication/authentication.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { PasswordDirective } from './directives/validations/password.directive'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptorService } from './interceptors/header-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    CardComponent,
    ClickDirective,
    TrimPipe,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharactersComponent,
    CharacterComponent,
    PopupComponent,
    AuthenticationComponent,
    RegisterComponent,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    //CharactersModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig) ,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  //va a estar por encima de todo
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    //en el caso que tengamos mas de 1 interceptor
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
