import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/settings' },
  {
    path: 'reports',
    loadChildren: () =>
      import('./modules/reports/reports.module').then((m) => m.ReportsModule),
    pathMatch: 'full',
  },
  {
    path: 'dividends',
    loadChildren: () =>
      import('./modules/dividends/dividends.module').then(
        (m) => m.DividendsModule
      ),
    pathMatch: 'full',
  },
  {
    path: 'fda',
    loadChildren: () =>
      import('./modules/fda/fda.module').then((m) => m.FdaModule),
    pathMatch: 'full',
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/setting/setting.module').then((m) => m.SettingModule),
    pathMatch: 'full',
  },

  {
    path: 'teardrop',
    loadChildren: () =>
      import('./modules/strategy/drop/drop.module').then((m) => m.DropModule),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
