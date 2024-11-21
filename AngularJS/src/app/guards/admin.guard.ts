import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = new AuthService();
  if (authService.isAuthenticated() && localStorage.getItem('user') === 'admin') {
    return true;
  } else {
    alert('Chỉ admin mới được truy cập trang này!');
    window.location.href = '/auth/signin';
    return false;
  }
};
