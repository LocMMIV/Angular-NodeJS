import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { MuonsachComponent } from './theloai/muonsach/muonsach.component';
import { UserGuard } from '../guards/user.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
      { path: 'trangchu', component: TrangchuComponent },
      { path: 'theloai', component: TheloaiComponent },
      { path: 'lienhe', component: LienheComponent },
      { path: 'muonsach', component: MuonsachComponent },
      { path: 'logout', redirectTo: '/auth/logout', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
