import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  userInfo: UserInfo;
  isLogin: boolean;
  constructor() { 
    this.isLogin = false;
    this.userInfo = new UserInfo();
  }

}

class UserInfo {
  id: number;
  username: string;
}