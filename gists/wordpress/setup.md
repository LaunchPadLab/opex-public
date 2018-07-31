MAMP
--------

Here's what have so far (using [MAMP](https://www.mamp.info/en/)):

1. Download [MAMP](https://www.mamp.info/en/).
2. Under Preferences, set Web Server Document Root to `/Users/<your-root-user>/Sites`
3. Under Preferences, set Apache Port to `80` (don’t _have_ to, but this will allow you to reach the local site through `localhost/<SITE-NAME>` instead of including the port #)
4. Clone down the WP site code, and add files to `/Users/<your-root-user>/Sites/<SITE-NAME>`.
6. Download the SQL dump file of the WP database.
7. Go to phpMyAdmin and create new database, and name it whatever you'd like. Under Imports, upload the SQL file. You can set the collation to `utf_8_unicode_ci`.
8. Update the following config variables in `wp-config.php` (under the LOCAL setup):
```
define('DB_NAME', <DATABASE-NAME-HERE>);
define('DB_USER', 'root');
define('DB_PASSWORD', 'root');
define('DB_HOST', 'localhost:8889');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', 'utf8_unicode_ci');
define('WP_HOME', 'http://localhost/<SITE-NAME>' );
define('WP_SITEURL', 'http://localhost/<SITE-NAME>' );
```
9. Visit `localhost/<SITE-NAME>`

Local Setup
------------------

To add a bit more detail around our setup:

1. Create new site on Pantheon.
2. Clone down the repo from the `git` repository on Pantheon. You'll want to clone this code into your `Web Server Document Root` for MAMP.
3. Start up MAMP.
4. Next, open the code you just cloned down and remove the current themes and install this [one](https://github.com/digisavvy/some-like-it-neat) instead.
5. When you try to navigate to `localhost/<SITE-NAME>`, you'll likely receive a DB connection error. You'll want to create a file called `wp-config-local.php` (in the same directory as `wp-config.php`) with this [code](https://github.com/LaunchPadLab/opex/issues/122#issuecomment-381251252). 
6. Now open up phpMyAdmin within MAMP and either create a new database called `<SITE-NAME>_dev` or import a SQL file as noted above. When creating a new database, make sure to select the `utf_8_unicode_ci` encoding.
7. Now go back to `wp-config-local.php` and update the `DB_NAME`, `WP_HOME`, and `WP_SITEURL`.
8. When you navigate to `localhost/<SITE-NAME>` you should be prompted to install Wordpress if you created a new database or you should see your site if you imported a database.
9. Lastly, within your code, navigate to the `some-like-it-neat` theme folder and run `npm install`. To get your styles to load, run `gulp`. Once you refresh your browser, you should see your styles.

cc @marchwiany @victoriapalacios 
