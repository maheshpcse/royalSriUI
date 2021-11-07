import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './access/login/login.component';
import { SignupComponent } from './access/signup/signup.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersComponent } from './orders/orders.component';
import { OrgComponent } from './org/org.component';
import { ReportsComponent } from './reports/reports.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user/dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'invoices',
    component: InvoicesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'org',
    component: OrgComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
