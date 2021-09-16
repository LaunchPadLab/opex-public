# OPEX

Opex is an internal organization that focuses on improving the tri-fold objectives of **development speed**, **code quality** and **developer experience** at LaunchPad Lab.

This repository is Opex's home base on Github. It contains the following resources:
1. [A list of Opex-maintained "internal open source" projects](#projects).
1. [A few gists that document our standard development practices](#gists).

## Projects

The following projects are "internal open source" at Launchpad. That means that they were created at LPL and will continue to be maintained by LPL. Just like with other open source projects, contributions to these repositories from any developer are welcome!

Project | Language | Visibility | Description
--- | --- | --- | ---
[Client Template](https://github.com/LaunchPadLab/client-template) | JS, React, Redux | Private | Template app for React/Redux SPAs.
[Decanter](https://github.com/LaunchPadLab/decanter) | Ruby, Rails | Public | Gem that makes it easy to transform incoming data before it hits the controller action or model.
[Fuel](https://github.com/LaunchPadLab/fuel) (no longer maintained) | Ruby, Rails | Public | Stop developing Rails blogs and start writing your actual blog posts with this dead simple blogging engine for Rails.
[LP Components](https://github.com/LaunchPadLab/lp-components) | JS, React | Public | A set of reusable React components.
[LP Form](https://github.com/LaunchPadLab/lp-form) | JS, Redux | Public | Extensions for the reduxForm HOC.
[LP HOC](https://github.com/LaunchPadLab/lp-hoc) (deprecated) | JS, React | Public | A set of higher order components (HOC) for use in React apps.
[LP Redux Api](https://github.com/LaunchPadLab/lp-redux-api) | JS, Redux | Public | Lightweight API library and middleware for redux applications.
[LP Redux Utils](https://github.com/LaunchPadLab/lp-redux-utils) | JS, Redux | Public | Utility functions for redux applications.
[LP Requests](https://github.com/LaunchPadLab/lp-requests) | JS | Public | Client-side request library.
[LP Utils](https://github.com/LaunchPadLab/lp-utils) (deprecated) | JS, React, Redux | Public | A set of utility functions and higher order components (HOC) for use in React and Redux apps.
[LP Token Auth](https://github.com/LaunchPadLab/lp_token_auth) | Ruby, Rails | Public | Simple token authentication logic with JWTs for Rails apps.
[LP Subsection Generator](https://github.com/LaunchPadLab/lp-subsection-generator) | JS, React, Redux | Public | Generates subsections for react-redux apps.
[Open Sesame](https://github.com/LaunchPadLab/opensesame) | Bash | Private | Secure secret management.
[Rails Template](https://github.com/LaunchPadLab/rails_template) | Ruby, Rails | Private | Templates and starter files for Rails apps.
[Rails Util](https://github.com/LaunchPadLab/rails_util) | Ruby, Rails | Private | Utility methods for Rails apps.
[Redux Flash](https://github.com/LaunchPadLab/redux-flash) | JS, Redux | Public | Redux action creators for displaying flash messages.
[Token Master](https://github.com/LaunchPadLab/token-master) | Ruby, Rails | Public | Easy management of token-based flows for Ruby apps.
[Versionator](https://github.com/LaunchPadLab/versionator) | JS | Private | GitHub status integration to help with library versioning.

**Note**: Open source visibility is defined in two ways: *transparency* and *community owned*. We default to our libraries and code being open source for the sake of transparency but is maintained by our team and not the larger community. There are exceptions where a library seeks out community involvement and code updates (ex. [Decanter](https://github.com/LaunchPadLab/decanter)), but that is part of a conscious and intentional decision by the Opex team.

## Gists

One function of Opex is to set standard processes by which we do our work. These processes are documented in the [gists](gists) folder of this repository. 

These documents are fairly limited in scope, and there are few of them by design. This prevents information overload and encourages us to encapsulate as many of our best practices as possible in our app template repositories. Still, they may come in handy as a general reference / anti-[bikeshedding](https://css-tricks.com/what-is-bikeshedding) tool.
