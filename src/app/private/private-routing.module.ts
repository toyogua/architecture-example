import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PrivateComponent} from './private.component';

const routes: Routes = [
  {
    path: '', component: PrivateComponent,
    children: [
      {
        path: 'contractors',
        loadChildren:
          () => import('./contractors/presentation/components/contractors/contractor.module')
            .then(m => m.ContractorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
