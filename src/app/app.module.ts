import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [AppComponent, UserListComponent, UsersDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CoreModule,
    HttpClientModule,
    CardModule,
    SharedModule,
  ],
  providers: [
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
