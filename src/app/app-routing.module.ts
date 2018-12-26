import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './login/login.component';

const app_routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'home', component: PrincipalComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }