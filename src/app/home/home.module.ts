import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homeRouters } from './home.routerModule';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { GettingStartedComponent } from "./getting-started/getting-started.component";
import { TutorialComponent } from "./tutorial/tutorial.component";
import { BsDropdownModule } from 'ngx-bootstrap';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouters),
    BsDropdownModule.forRoot()
  ],
  exports: [],
  declarations: [
    HomeComponent,
    HeaderComponent,
    NavComponent,
    GettingStartedComponent,
    TutorialComponent,
    HeroEditorComponent
  ],
  providers: []
})
export class HomeModule { }
