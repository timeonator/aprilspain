import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PromoComponent } from './promo.component';
import { SharedModule } from '../shared';

const promoRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'promo',
    component: PromoComponent
  }
]);

@NgModule({
  imports: [
    promoRouting,
    SharedModule
  ],
  declarations: [
    PromoComponent
  ],
  providers: []
})
export class PromoModule {}
