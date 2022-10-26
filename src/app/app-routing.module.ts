import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DeliveryPaymentComponent } from './pages/delivery-payment/delivery-payment.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DiscountAdminComponent } from './pages/admin/discount-admin/discount-admin.component';
import { CategoryAdminComponent } from './pages/admin/category-admin/category-admin.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'discounts', component: DiscountsComponent},
  {path: 'product-category/:product', component: ProductsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'delivery-payment', component: DeliveryPaymentComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/discount', component: DiscountAdminComponent},
  {path: 'admin/category', component: CategoryAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
