import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }])
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
