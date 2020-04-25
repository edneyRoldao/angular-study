import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modules
import { LoginModule } from './login/login.module';
import { ListaComprasModule } from './lista-compras/lista-compras.module';

// components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // app modules
    ListaComprasModule,
    LoginModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
