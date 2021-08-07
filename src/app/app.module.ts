import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecoveredComponent } from './pages/components/recovered/recovered.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from './pages/components/recovered/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RecoveredComponent,
    HeaderComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
