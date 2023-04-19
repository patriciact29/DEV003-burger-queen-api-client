import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  redirect(flag: boolean): any{
    if (!flag){
      this.router.navigate(['/home', ''])
    }
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const authToken = sessionStorage.getItem('token');
    if(authToken){
      return this.redirect(true)
    }
    console.log("aqui");
    return false
  }
}

// export class AuthGuard {

//   constructor(private router: Router){}

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot)
//     {
//       debugger;
//       const token =localStorage.getItem('token');
//       if (token){
//         this.router.navigate(['home']);
//       }
//       this.router.navigate(['']);
//       return false
//   }

// }



