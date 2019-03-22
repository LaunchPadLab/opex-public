# New Project Checklist

Checklist for setting up the repository, Heroku, and other integrations when starting a new project.

The below items capture the steps that should be completed for both client-side and server-side repos.
This checklist assumes that a new repo is started from the rails or client templates, which include the configuration files needed for the integrations.

## GitHub
- [ ] Create a new repo in GitHub (do not initialize with a README)
- [ ] Add the repo as origin (following GitHub's instructions) and push initial commit from the template

### Insights

#### Dependency Graph
  - [ ] Allow access to enable security alerts

### Settings

#### Options
  - [ ] Default to squash and merge behavior: Uncheck "allow merge commits" and "allow rebase merging"

#### Branches
  - [ ] Set up `master`, `staging`, and `dev` branches
  - [ ] Set default branch to `dev`
  - [ ] Protect `master`, `staging`, and `dev` branches:
    - [ ] Require pull request reviews before merging
    - [ ] Require status checks to pass before merging

#### Collaborators
  - [ ] Add LPL team users

## Integrations

### Sentry
  - [ ] Create project (add to LaunchPad Lab team)
  - [ ] Add Sentry DSN to `application.yml` as `SENTRY_URL`
    - [ ] If this file doesn't exist, follow [these instructions](https://github.com/LaunchPadLab/opensesame#opensesame)
    - [ ] (Optional - Client): Add `SENTRY_ENV` to differentiate between apps (e.g., production or staging)

### Travis
  - [ ] Confirm that repo has been added to [Travis CI](https://travis-ci.com/)

## Heroku

### Create New
  - [ ] Create pipeline
  - [ ] Add `production` environment app to pipeline
  - [ ] Add `staging` environment app to pipeline
  - [ ] Add `dev` environment app to pipeline
  - [ ] Enable review apps in pipeline

### Resources
  - [ ] Add New Relic add-on
  - [ ] Add Papertrail add-on

### Deploy
  - [ ] Deploy via GitHub
    - [ ] Set `dev` to automatically deploy on push to `dev`
    - [ ] Set `staging` to automatically deploy on push to `staging`
    - [ ] Set `master` to automatically deploy on push to `master`
      - [ ] Check "wait for CI to pass before deploy"

### Access
  - [ ] Add admins and collaborators as needed

### Settings
  - [ ] Add config vars from `application.yml` to the respective environment app
