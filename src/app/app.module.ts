import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormComponent } from './components/form/form.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: FormComponent},
      {path: 'sobremi', component: SobremiComponent},
      {path: 'estadisticas', component: ListCardComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
