import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SeguridadGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    
    const access = localStorage.getItem('access');

    if (!(access === 'ok')) {
      console.log("No estás logueado");
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
