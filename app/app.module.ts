/**
 * Created by AmitThakkar on 9/27/2016.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {APP_ROUTING, appRoutingProviders} from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        APP_ROUTING
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}