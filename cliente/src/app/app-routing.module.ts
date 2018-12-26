import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

const app_routes: Routes = [
    { path: '', component: PrincipalComponent, canActivate: [LoginGuard] },
    { path: 'home', component: PrincipalComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent, canActivate: [NoLoginGuard] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    providers: [LoginGuard, NoLoginGuard],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule { }