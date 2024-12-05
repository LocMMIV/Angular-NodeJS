import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root', // Đảm bảo guard có thể được sử dụng trong toàn bộ ứng dụng
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('bàksbkadsbkjbdsk');
    // Kiểm tra nếu người dùng đã đăng nhập và có quyền truy cập admin
    if (this.authService.isAuthenticated()) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      console.log(user);
      if (user.role === 'admin') return true;
      return false;
    } else {
      alert('Chỉ admin mới được truy cập trang này!');
      this.router.navigate(['/auth/signin']); // Điều hướng đến trang đăng nhập
      return false;
    }
  }
}
