import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {delay, of} from "rxjs";

const routes: Routes = [
  {
    path: 'page1',
    loadComponent: () => import("./page1/page1.component")
  },
  {
    path: 'page2',
    canActivate: [() => of(true).pipe(delay(5000))],
    loadComponent: () => import("./page2/page2.component")
  },
  {
    path: 'page3',
    loadComponent: () => import("./page3/page3.component")
  },
  {
    path: 'page4',
    canActivate: [() => of(true).pipe(delay(10))],
    loadComponent: () => import("./page3/page3.component")
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
