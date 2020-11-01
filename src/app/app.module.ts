import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';
import { SharedModule } from './shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
import { CoreModule } from './core/core.module';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule,
    SharedModule,
    CoreModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
