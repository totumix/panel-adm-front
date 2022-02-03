import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutingPath } from "./../../configs/routing-path";

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
      },
      {
        path: RoutingPath.appRouting.components.main_dashboard.pages.roles.path,
        data: {
          breadcrumb: RoutingPath.appRouting.components.main_dashboard.pages.roles.breadcrumb
        },
        loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
