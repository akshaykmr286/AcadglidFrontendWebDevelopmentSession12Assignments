import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Ass1Component } from './ass1/ass1.component';
import { Ass2Component } from './ass2/ass2.component';
import { Ass3Component } from './ass3/ass3.component';
import { Ass4Component } from './ass4/ass4.component';

import { AddCricketerAss1Component } from './ass1/add-cricketer-ass1/add-cricketer-ass1.component';
import { CricketerListAss1Component } from './ass1/cricketer-list-ass1/cricketer-list-ass1.component';
import { CricketerDetailAss1Component } from './ass1/cricketer-detail-ass1/cricketer-detail-ass1.component';

const appRoutes: Routes = [
    { path: ' ', redirectTo: 'ass1',pathMatch: 'full' },
    { 
        path: 'ass1', 
        component: Ass1Component,
        children:[
            {path:'', redirectTo: 'add', pathMatch: 'full'},
            { path: 'add', component: AddCricketerAss1Component},
            { path: 'list', component: CricketerListAss1Component},
            { path: 'cricketerDetail/:id', component: CricketerDetailAss1Component }
        ]
    },
    { path: 'ass2', component: Ass2Component},
    { path: 'ass3', component: Ass3Component},
    { path: 'ass4', component: Ass4Component},
     { path: '**', redirectTo: 'ass1' }
];

export const routing = RouterModule.forRoot(appRoutes,{useHash: true});