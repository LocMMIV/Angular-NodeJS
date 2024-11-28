import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { TheloaiComponent } from './theloai/theloai.component';
import { XephangComponent } from './xephang/xephang.component';



const routes: Routes = [
  { path: '', component: UserComponent, children: [
      { path: '', redirectTo: 'trangchu', pathMatch: 'full' },
      { path: 'trangchu', component: TrangchuComponent },
      { path: 'theloai', component: TheloaiComponent },
      { path: 'xephang', component: XephangComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
