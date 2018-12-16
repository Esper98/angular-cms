import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [ 
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }, 
  {
    path: 'posts',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
