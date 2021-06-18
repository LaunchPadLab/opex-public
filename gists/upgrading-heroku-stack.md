# Upgrading Heroku Stack in an Existing Project

## Before You Start

- Determine which version of Ruby the project is using and if it is compatible with the Heroku stack you are targeting. See
  [Heroku Ruby Versions]([https://devcenter.heroku.com/articles/ruby-support#ruby-versions]) for more information.
- If you need to upgrade Ruby, consider the end-of-life date for the Rubies that are compatible with the Heroku stack you are targeting. Don't choose a Ruby that has reached EOL or one that's close because EOL Rubies do not receive security updates. [Ruby Maintenance Branches]([https://www.ruby-lang.org/en/downloads/branches/]).

## Process

1. If you need to upgrade Ruby, cut a feature branch from dev and follow the instructions in the [Upgrading Ruby]([https://github.com/LaunchPadLab/opex-public/blob/master/gists/upgrading-ruby.md]) gist.
2. Once Ruby is upgraded to the targeted version, Heroku recommends testing the new stack in a Review App. Inside `app.json` add a reference to the new Heroku stack.

```ruby
{
 "name": "awesome_app",
  "stack": "heroku-18",
  "description": "",
  ...
}
```

3. Pushing this branch and creating a pull request for it into dev will deploy the app on the new stack as a Review App where it can be thoroughly tested.
4. If all is right with the Review App on the new stack, set staging to use the new stack: `heroku stack:set heroku-18 -a awesome_app_staging`.
5. For apps that have previously been built, this does not immediately change the stack of the app. A new build is required (which will target the chosen stack) for the change to take effect. Merge your dev branch changes into staging and deploy to staging with `git push staging staging` (assuming your remote is name "staging").
6. If everything checks out on staging, perform steps 4 and 5 again to upgrade production to the new stack and trigger a build.
7. To confirm the new Heroku stack is running on an app:

```ruby
heroku stack -a awesome_app
# container
# * heroku-18
# heroku-20
```

8. To confirm the new Ruby is running:

```ruby
heroku run ruby -v -a awesome_app
# ruby 2.6.7p197 (2021-04-05 revision 67941) [x86_64-linux]
```
