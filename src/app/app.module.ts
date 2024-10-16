import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphicComponent} from './graphics/graphic/graphic.component';
import {NgxEchartsModule} from 'ngx-echarts';
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {MultiSelectModule} from "primeng/multiselect";


@NgModule({
    declarations: [
        AppComponent,
        GraphicComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CalendarModule,
        DropdownModule,
        BrowserAnimationsModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts')
        }),
        FormsModule,
        InputNumberModule,
        MultiSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
