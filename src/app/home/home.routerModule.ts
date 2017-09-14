import { HomeComponent } from './home.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { TutorialComponent } from "./tutorial/tutorial.component";
import { HeroEditorComponent } from "./hero-editor/hero-editor.component";
export const homeRouters = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'gettingStarted',
      component: GettingStartedComponent
    },{
      path: 'tutorial',
      component: TutorialComponent
    },{
      path: 'heroEditor',
      component: HeroEditorComponent
    },{
      path: '',
      redirectTo: 'gettingStarted',
      pathMatch: 'full'
    }]
  }
];
