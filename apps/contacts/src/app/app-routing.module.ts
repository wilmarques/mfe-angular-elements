import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './contacts/list.component';
import { EditComponent } from './contacts/edit.component';

const routes: Routes = [
  {
    path: 'contacts',
    component: ListComponent,
  },
  {
    path: 'contacts/edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
