import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root'})
export class AuthGuard {

  constructor(private router: Router){}

  CanActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      debugger;
      const token =localStorage.getItem('token');
      if (token){
        this.router.navigate(['home']);
      }
      this.router.navigate(['']);
      return false
  }

}



