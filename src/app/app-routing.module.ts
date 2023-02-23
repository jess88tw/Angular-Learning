import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { BoardComponent } from './board/board.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'board', component: BoardComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2/:name/:count', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: '**', redirectTo: '/board' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
