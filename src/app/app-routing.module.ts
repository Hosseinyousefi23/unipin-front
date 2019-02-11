import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {NewPostComponent} from "./new-post/new-post.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'logout', component: PostsComponent},
  {path: 'post/:id', component: PostDetailComponent},
  {path: 'new-post', component: NewPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
