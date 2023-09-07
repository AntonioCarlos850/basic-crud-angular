import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/product/create/create.component';
import { EditComponent } from './components/product/edit/edit.component';
import { DeleteComponent } from './components/product/delete/delete.component';
import { ShowComponent } from './components/product/show/show.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "product/create",
    component: CreateComponent
  },
  {
    path: "product/edit/:id",
    component: EditComponent
  },
  {
    path: "product/delete/:id",
    component: DeleteComponent
  },
  {
    path: "product/show/:id",
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
