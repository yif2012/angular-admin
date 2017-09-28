import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  obs: Observable<any>;
  subscription;
  constructor(private http: Http, private service: ServiceService, private router: Router) {
    this.obs = Observable.create(observer => observer.next(this.service.isLogin));
    this.subscription = this.obs.subscribe(value => console.log(value));
  }

  ngOnInit() {
    this.http.post('http://localhost:1234/userInfo', {}).toPromise().then(response => {
      const res: Code = response.json();
      if (res.code === 666) {
        console.log(res)
        if (res.var.username) {
          this.service.isLogin = true;
          this.service.userInfo = res.var;
          this.subscription.next(this.service.isLogin);
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['login']);
        }
      }
    });
  }
}

class Code {
  code: number;
  status: string;
  var: any;
}
