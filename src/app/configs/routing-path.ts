export class RoutingPath {
  public static appRouting = {
    components: {
      sso: {
        path: "sso",
        pages: {
          login: {
            path: "login",
            breadcrumb: "Login"
          },
          signup_user: {
            path: "signup-user",
            breadcrumb: "Sign up"
          },
          reset_password: {
            path: "reset-password",
            breadcrumb: "Reset password"
          }
        }
      },
      main_dashboard: {
        path: "main-dashboard",
        pages: {
          home: {
            path: "home",
            breadcrumb: "Home"
          },
          users: {
            path: "users",
            breadcrumb: "Users"
          },
          customers: {
            path: "customers",
            breadcrumb: "Customers"
          },
          posts: {
            path: "posts",
            breadcrumb: "Posts"
          },
          products: {
            path: "products",
            breadcrumb: "Products"
          },
          statistics: {
            path: "statistics",
            breadcrumb: "Statistics"
          },
          articles: {
            path: "articles",
            breadcrumb: "Articles"
          },
          categories: {
            path: "categories",
            breadcrumb: "Categories"
          },
          roles: {
            path: "roles",
            breadcrumb: "Roles"
          },
        }
      }
    }
  };
}
