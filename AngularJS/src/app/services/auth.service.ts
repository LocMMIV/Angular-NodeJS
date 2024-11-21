import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  // Đăng nhập
  login(email: string, password: string): boolean {
    if (email === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify({ email: 'admin' }));
      return true;
    }
    return false;
  }

  // Đăng xuất
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  // Kiểm tra xem người dùng đã đăng nhập chưa
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }

  // Đăng ký người dùng mới
  register(user: { firstName: string, lastName: string, email: string, password: string }): boolean {
    // Kiểm tra xem email đã tồn tại chưa (giả lập kiểm tra, trong thực tế bạn sẽ gọi API)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u: any) => u.email === user.email);

    if (existingUser) {
      alert('Tài khoản đã tồn tại!');
      return false; // Nếu đã có người dùng với email này
    }

    // Lưu người dùng vào localStorage (hoặc cơ sở dữ liệu khi có backend)
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    return true;
  }
}
