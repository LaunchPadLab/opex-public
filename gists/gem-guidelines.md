# Gem guidelines

Guidelines for creating and contributing to gems.

_Note: This is a living document and subject to change as best practices evolve._

## Licensing

Publicly available libraries should be licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Documentation

Documentation and usage information should be readily available via `README.md`, either within the document itself or via a link. Any changes or additions to the library should be accompanied by corresponding changes to the docs. The current maintainer(s) of the gem should be listed in the readme as well.

## Pull Requests and Deployments

Pull requests must be approved by a maintainer before merging into master. Before the PR is merged, the implementor should bump the version of the library according to semantic versioning.

Here’s a quick sanity check for choosing which version to use:

- If you had to change any existing tests or existing documentation, the version is probably a **major** version.
- If you had to add new tests or new documentation, the version is probably a **minor** version.
- If you didn’t need to change the tests and/or the documentation, the version is probably a **patch**.

Once merged, the master branch should be published to https://rubygems.org.

## Releases

Once a new version has been merged, a Github [release](https://help.github.com/en/github/administering-a-repository/creating-releases) should be created for it. The contributor responsible for the new version should add some notes to the release indicating what changes were made.

## Development

`README.md` should contain instructions on building the library locally. If you are developing and want to see the results in a local application, you can specify the local version [in your gemfile](https://stackoverflow.com/a/4488110).

## Testing

Although code coverage metrics are not required, new features and bug fixes should include basic corresponding tests. Libraries can use [Travis](https://travis-ci.org/) to run their testing tool of choice ([rspec](https://rspec.info/) is standard) before allowing PRs to be merged.
