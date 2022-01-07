import { Injectable } from '@angular/core';
import { RoutingPath } from './routing-path';

@Injectable({
  providedIn: 'root'
})
export class ConstRoutesService {
  //SSO
  public ssoModuleUrl = RoutingPath.appRouting.components.sso.path;
  public ssoLoginUrl = RoutingPath.appRouting.components.sso.pages.login.path;
  public ssoSignupUrl = RoutingPath.appRouting.components.sso.pages.signup_user.path;
  public ssoResetPasswordUrl = RoutingPath.appRouting.components.sso.pages.reset_password.path;

  //MAIN DASHBOARD MODULE
  public mainDashboardModuleUrl = RoutingPath.appRouting.components.main_dashboard.path;
  public mainDashboardHomeUrl = RoutingPath.appRouting.components.main_dashboard.pages.home.path;
  public mainDashboardUsersUrl = RoutingPath.appRouting.components.main_dashboard.pages.users.path;
  public mainDashboardCustomersUrl = RoutingPath.appRouting.components.main_dashboard.pages.customers.path;
  public mainDashboardPostsUrl = RoutingPath.appRouting.components.main_dashboard.pages.posts.path;
  public mainDashboardProductsUrl = RoutingPath.appRouting.components.main_dashboard.pages.products.path;
  public mainDashboardStatisticsUrl = RoutingPath.appRouting.components.main_dashboard.pages.statistics.path;
  public mainDashboardArticlesUrl = RoutingPath.appRouting.components.main_dashboard.pages.articles.path;
  public mainDashboardCategoriesUrl = RoutingPath.appRouting.components.main_dashboard.pages.categories.path;

  constructor() { }

}
