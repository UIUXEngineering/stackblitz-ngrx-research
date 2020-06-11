import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: '',
    children: [
      {
        path: 'feature-a',
        loadChildren: () => import('libs/feature-a/src/lib/feature-a.module').then((m) => m.FeatureAModule),
        data: { preload: true },
      },

      {
        path: 'feature-b',
        loadChildren: () => import('libs/feature-b/src/lib/feature-b.module').then((m) => m.FeatureBModule),
        data: { preload: true },
      },
      // {
      //   path: 'feature-c',
      //   loadChildren: () => import('libs/feature-c/src/lib/feature-c.module').then((m) => m.FeatureCModule),
      //   data: { preload: true },
      // },
    ]

  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
