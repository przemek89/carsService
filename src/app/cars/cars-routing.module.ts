import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";

const CARS_ROUTES : Route[] = [
    { path: 'cars/:id', component: <any>CarsDetailsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(CARS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class CarsRoutingModule {}