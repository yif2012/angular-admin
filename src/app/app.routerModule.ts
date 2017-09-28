import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GettingStartedComponent } from './home/getting-started/getting-started.component';
import { TutorialComponent } from "./home/tutorial/tutorial.component";
import { HeroEditorComponent } from "./home/hero-editor/hero-editor.component";
import { ReloadComponent } from './reload/reload.component';
import { UserInfo } from './service/isLogin';
export const appRouters = [
  {
    path: '',
    redirectTo: 'reload',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent,
    children: [{
      path: 'gettingStarted',
      component: GettingStartedComponent
    }, {
      path: 'tutorial',
      component: TutorialComponent
    }, {
      path: 'heroEditor',
      component: HeroEditorComponent
    }, {
      path: '',
      redirectTo: 'gettingStarted',
      pathMatch: 'full'
    }]
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'reload',
    component: ReloadComponent,
    canActivate: [UserInfo]
  }
];
