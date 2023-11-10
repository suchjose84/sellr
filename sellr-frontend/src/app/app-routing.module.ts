import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { HomepageComponent } from './home-page/home-page.component';

// const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent},
  { path: '', component: HomepageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from "@angular/core";
// import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from "@angular/router";

// const appRoutes: Routes = [
//     { path: '', redirectTo: '/recipes', pathMatch: 'full'},
//     // { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule'}
//     { path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
//     { path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
//     { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
// ];

// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
//     exports: [RouterModule]

// })
// export class AppRoutingModule {

// }
