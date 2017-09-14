import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './common/datepicker/datepicker.component';
import { AlertModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
import { appRouters } from './app.routerModule';
import { LoginComponent } from './login/login.component';
defineLocale('zh-cn', zhCn);

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BsDatepickerModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(appRouters),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
