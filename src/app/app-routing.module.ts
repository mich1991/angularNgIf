import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgifExampleComponent} from "./components/ngif-example/ngif-example.component";

const routes: Routes = [
  {path: 'ng-if' , component: NgifExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
