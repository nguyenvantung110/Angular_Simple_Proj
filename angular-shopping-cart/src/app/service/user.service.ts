import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser = [
    {
      id: 1,
      name: 'User 1',
      address: 'Address 1',
      avatar_Img: 'https://saraa.co.za/wp-content/uploads/2020/05/user.jpg',
      userName: 'user1@usol-v.com',
      password: 'us1!'
    },
    {
      id: 2,
      name: 'User 2',
      address: 'Address 2',
      avatar_Img: 'https://saraa.co.za/wp-content/uploads/2020/05/user.jpg',
      userName: 'user2@usol-v.com',
      password: 'us2!'
    },
    {
      id: 3,
      name: 'User 3',
      address: 'Address 3',
      avatar_Img: 'https://saraa.co.za/wp-content/uploads/2020/05/user.jpg',
      userName: 'user3@usol-v.com',
      password: 'us3!'
    }
  ]

  userInfoData =  new BehaviorSubject<any>(null);

  constructor() { }

  findUser(userName: string, password: string){
    return this.listUser.find(item => item.userName === userName && item.password === password);
  }
}
