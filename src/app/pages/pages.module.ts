import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { PAGES_ROUTES } from './pages.routes';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficaDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ], imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule { }