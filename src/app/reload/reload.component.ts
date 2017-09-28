import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ServiceService } from '../service/service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.css']
})
export class ReloadComponent implements OnInit {
  obs: Observable<any>;
  subscription;
  constructor(private http: Http, private service: ServiceService) {
    this.obs = Observable.create(observer => observer.next(this.service.isLogin));
    this.subscription = this.obs.subscribe(value => console.log(value));
  }

  ngOnInit() {
    this.http.post('http://localhost:1234/userInfo', {}).toPromise().then(response => {
      const res: Code = response.json();
      console.log(res)
      if (res.code === 666) {
        this.service.isLogin = true;
        this.subscription.next(this.service.isLogin);
      }
    });
  }
}

class Code {
  code: number;
  status: string;
  var: any;
}
