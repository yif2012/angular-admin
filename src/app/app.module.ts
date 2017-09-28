import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './common/datepicker/datepicker.component';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { defineLocale } from 'ngx-bootstrap/bs-moment';
import { zhCn } from 'ngx-bootstrap/locale';
import { appRouters } from './app.routerModule';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GettingStartedComponent } from './home/getting-started/getting-started.component';
import { HeroEditorComponent } from './home/hero-editor/hero-editor.component';
import { TutorialComponent } from './home/tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';
import { ServiceService } from './service/service.service';
import { ReloadComponent } from './reload/reload.component';
import { UserInfo } from './service/isLogin';
defineLocale('zh-cn', zhCn);

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    GettingStartedComponent,
    HeroEditorComponent,
    TutorialComponent,
    ReloadComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    RouterModule.forRoot(appRouters),
    NgZorroAntdModule.forRoot(),
  ],
  providers: [ServiceService,UserInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
