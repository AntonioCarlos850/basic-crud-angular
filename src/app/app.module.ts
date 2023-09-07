import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/product/card/card.component';
import { CreateComponent } from './components/product/create/create.component';
import { EditComponent } from './components/product/edit/edit.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { ShowComponent } from './components/product/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
