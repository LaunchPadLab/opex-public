# NPM Package guidelines

Here are some guidelines for creating and contributing to NPM packages.

*Note: This is a living document and subject to change as best practices evolve.*

## Documentation
Documentation and usage information should be contained in a `docs.md` file at the root level. If possible, docs should be auto-generated from inline [JSDoc-style](http://usejsdoc.org/) comments using [documentation.js](https://github.com/documentationjs/documentation).
Any changes or additions to the library should be accompanied by corresponding changes to the docs. Docs can be automatically compiled with a precommit hook using [husky](https://github.com/typicode/husky).

## Feature Requests
For new features, contributors should submit an issue or PR with the label of `idea`, and include a description of the change and why it is necessary.

## Pull Requests and Deployments
Pull requests must be approved by someone on the team before merging into master. Before the PR is merged, the implementor should bump the version according to semantic versioning using either the [versionator](https://github.com/LaunchPadLab/versionator) or `yarn version`. 
Once merged, the master branch should be auto-published to NPM via Codeship.

## Releases
Once a new version has been merged, a Github release will be automatically created for it. The contributor responsible for the new version should add some notes to the release indicating what changes were made.

If the new release is not visible, you may need to push the tag created by `yarn version`, using `git push --tags`.

## Development

To develop the package locally:
* `git clone git@github.com:LaunchPadLab/package-name`
* `yarn install`

If you are developing and want to see the results in a local client application:
* Link the local library:
  * `yarn link` in the package directory
  * `yarn link package-name` in the client directory
* Run the watchful build: `yarn start`

Changes will be immediately compiled and available to the client application.

*Warning:* Remember to unlink the library and use a real version before submitting a pull request for the client application. Forgetting to do so may cause you to push up code which works locally but breaks on a review app.

## Testing
Packages should use [Jest](https://facebook.github.io/jest/) for unit testing, run with `yarn run test`.

## Linting
Package should use [ESLint](http://eslint.org/) for linting, run with `yarn run lint`. [Here's](.eslintrc) a sample lint config file with some useful plugins included.