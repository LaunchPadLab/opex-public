# Upgrading Rails in an existing Project

## Before You Start

- Make sure you have good test coverage. It's the only way to really know if an upgrade didn't break existing functionality.

- It's recommended by the Rails team to update one minor version at a time to make good use of the deprecation warnings. Rails version numbers are in the form `Major.Minor.Patch`. Major and Minor versions are allowed to make changes to the public API, so this may cause errors in your application. Patch versions only include bug fixes, and don't change any public API.

## Process

1. Identify the next minor version of Rails that's above the current version.
2. Change the version of Rails in the `Gemfile`
3. If you have gems pinned to specific versions in the `Gemfile`, determine if you still want this behavior. Some of our pinned gems (such as Bourbon and Neat) are not compatible with the latest version of Rails. If you can remove the pins, it's recommended to do so now.
4. Run `bundle update`. This will update all of the gems in Gemfile to their latest versions unless the version is pinned.
5. Run `rails app:update`. This will generate new files and change some existing configuration files.
6. In the following interactive session, you will be asked to accept or decline these changes. Examine the diffs for each file and determine if you want to accept them. Chances are that you will want to accept these changes. In some config files, you may want to add your existing configurations to the new/updated file created by Rails.
7. Run tests. If all is good, repeat this process with the following minor versions until you reach the desired version of Rails.
