import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingPath } from "./../../configs/routing-path";
//COMPONENTS
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { AddUserComponent } from './pages/users/pages/add-user/add-user.component';
import { ProductsTableComponent } from './pages/products/components/products-table/products-table.component';
import { AddProductComponent } from './pages/products/components/add-product/add-product.component';
import { CustomersTableComponent } from './pages/customers/componets/customers-table/customers-table.component';
import { AddCustomerComponent } from './pages/customers/componets/add-customer/add-customer.component';
import { PostTableComponent } from './pages/posts/components/post-table/post-table.component';
import { AddPostComponent } from './pages/posts/components/add-post/add-post.component';

//GUARDS

const routes: Routes = [
  {
    path: "",
    pathMatch: "prefix",
    canActivate: [],
    children: [
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.home.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.home.breadcrumb
        },
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.users.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.users.breadcrumb
        },
        loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.customers.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.customers.breadcrumb
        },
        loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.posts.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.posts.breadcrumb
        },
        loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.products.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.products.breadcrumb
        },
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.statistics.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.statistics.breadcrumb
        },
        loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.articles.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.articles.breadcrumb
        },
        loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule)
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.categories.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.categories.breadcrumb
        },
        loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
