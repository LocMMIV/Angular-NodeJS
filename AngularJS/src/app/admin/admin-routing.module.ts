import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { KhachhangComponent } from './qlnguoidung/khachhang/khachhang.component';
import { NhanvienComponent } from './qlnguoidung/nhanvien/nhanvien.component';
import { SachComponent } from './qlsanpham/sach/sach.component';
import { TheloaiComponent } from './qlsanpham/theloai/theloai.component';
import { QllienheComponent } from './qllienhe/qllienhe.component';
import { QlmuontraComponent } from './qlmuontra/qlmuontra.component';
import { ThemsachComponent } from './qlsanpham/sach/themsach/themsach.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'thongke', pathMatch: 'full' }, // Điều hướng mặc định
      { path: 'thongke', component: ThongkeComponent },
      { path: 'qlnguoidung/khachhang', component: KhachhangComponent },
      { path: 'qlnguoidung/nhanvien', component: NhanvienComponent },
      { path: 'qlsanpham/sach', component: SachComponent },
      { path: 'qlsanpham/theloai', component: TheloaiComponent },
      { path: 'qllienhe', component: QllienheComponent },
      { path: 'qlmuontra', component: QlmuontraComponent },
      { path: 'qlsanpham/sach/themsach', component: ThemsachComponent },
      { path: 'logout', redirectTo: '/login' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
