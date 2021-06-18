# Upgrading Ruby in an Existing Rails Project

## Before You Start

- Research the version you are planning to install to learn about potential challenges you may face. It's possible that code that was written with an older version of Ruby is no longer viable in the new version you are installing. For example, in Ruby 3 there are siginicant changes to how Ruby handles keyword arguments.

```ruby
def bar(h, **kwargs)
  p h
end

bar(k: 42)

# In Ruby 2.7, this call raised a deprecation warning: "Passing the keyword argument as the last hash parameter is deprecated."

# In Ruby 3, calling this method raises an ArgumentError. If you want to keep the behavior in Ruby 3.0, use braces to make it an explicit Hash:

bar({ k: 42 }) # => {:k=>42}
```

- Don't upgrade Ruby and Rails at the same time. Upgrade the Ruby version first, merge it into production, then upgrade Rails.

- Make sure you have good test coverage. The only way to be truly confident that upgrading Ruby did not break some aspect of your app is to run tests before and after the upgrade.

- Upgrade Ruby incrementally—don't go from 2.6.5 to 2.7.0. Upgrade to 2.6.6 first, and if all is well upgrade to 2.6.7. If all is still well, upgrade to 2.7.0.

## Process

1. Check if you have the version of Ruby you want to upgrade to: `rbenv install -L`

2. If it's not listed, add the latest Rubies to your local collection with Homebrew/rbenv: `brew upgrade rbenv ruby-build`

3. Install the specific Ruby version `rbenv install {version}`

4. Inside the Rails project, update the Ruby version in `.ruby-version`

5. Also update the Ruby version in `Gemfile`, and if the project uses Rubocop and Travis, update the Ruby in `rubocop.yml` and `travis.yml`, respectively.

6. You'll probably need to install bundler for the new Ruby, so check if it's installed with `bundler -v`. If you need it, run `gem install bundler:{version_number}`.

7. Run `bundle install`. At this point, there will probably be errors due to some gems that don't support the new Ruby.

8. If there are failures, look at the error message to determine which gem Bundler failed on. It's possible that a dependency of that gem is incompatible with the new Ruby and it needs to be updated. You can update a specific gem with `bundle update {gem-name}`. If this resolves your issue, run `bundle install` again. You may have to repeat this process a few times.

9. Another option is to run `bundle update --conservative`, which updates the gems in your gemfile but prevents Bundler from updating the versions of any of the gems they depend on.

10. When Bundler is finished, boot up your app and look for deprecation warnings. These warnings will identify potential failures that may occur the next time you upgrade Ruby. Now, run your test suite to make sure all the tests pass.

11. If all is good, deploy the new Ruby to your testing environment and then to production.
