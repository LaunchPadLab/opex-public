# Sentry Setup

1. Install the [Wordpress Sentry](https://wordpress.org/plugins/wp-sentry-integration/#installation) plugin through WordPress admin dashboard.

2. Create a new Sentry project for PHP under the LaunchPad team: https://sentry.io/organizations/launchpad-lab/projects/new/. 

3. Add the following variables to the `wp-config.php` file (under the database variables for the production environment).

  ```php
    define( 'WP_SENTRY_DSN', '<DSN HERE>' ); // for PHP errors
    define( 'WP_SENTRY_PUBLIC_DSN', '<PUBLIC DSN HERE>' ); // for JavaScript errors
    define( 'WP_SENTRY_ENV', 'production' );
  ```

4. Deploy the updated site.

5. Activate the plugin through the WordPress admin dashboard.