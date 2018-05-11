# Sentry Setup

## Pantheon

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

## WP Engine

Follow the same steps as above (aside from #4), except you will need to SFTP into the WP site in order to edit the `wp-config.php` file. This file is not under version control.

Using an application such as [Cyberduck](https://cyberduck.io), follow the instructions here: https://wpengine.com/support/sftp/.
