import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  if (authService.isAuthenticated()) {
    return true;
  } else {
    alert('Vui lòng đăng nhập trước!');
    window.location.href = '/auth/signin';
    return false;
  }
};
