import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean;
  navIsOpened: boolean=true;


  constructor(private router: Router,private service: UserService) { }

  ngOnInit() {
    let currentRoles =this.service.getDecodedToken().roles;
  }

  openNav(){
    this.navIsOpened = true;

  }

  closeNav(){
    this.navIsOpened = false;
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

  RouterGoHome(){
    this.router.navigate(['/home']);
  }
}
