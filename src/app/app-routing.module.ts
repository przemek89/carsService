import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import { AuthCanLoadGuard } from "./guards/auth-can-load.guard";
import { PageNotFoundComponent } from "./shared-module/page-not-found/page-not-found.component";

const APP_ROUTES : Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'cars', canLoad: [AuthCanLoadGuard] ,loadChildren: () => import('src/app/cars/cars.module').then(m => m.CarsModule) },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}