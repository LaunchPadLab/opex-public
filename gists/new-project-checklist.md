# New Repo Checklist

## GitHub

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
  - [ ] Add Sentry DSN to code
  - [ ] Add Sentry DSN to Heroku app

### Codeship
  - [ ] Create project
  - [ ] Connect via Github
  - [ ] Select Basic project
  - [ ] Add test commands
  - [ ] Add environment variables

### Travis
  - [ ] Add repo
  - [ ] Add .travis.yml

### Code Climate
  - [ ] Add repo

### Slack
  - [ ] Create channel
  - [ ] Add [Github Legacy Notifications](https://launchpadlab.slack.com/apps/new/A0F7YS2SX-github-notifications-legacy) to channel
  - [ ] Deselect commit events
  - [ ] Select Pull request, reviews, issues, and comments on PR's or issues
  - [ ] Select Deploy Events

## Heroku

### Create New
  - [ ] Create pipeline
  - [ ] Add production environment app to pipeline
  - [ ] Add staging environment app to pipeline
  - [ ] Enable review apps in pipeline

### Resources
  - [ ] New Relic
  - [ ] Papertrail

### Deploy
  - [ ] Deploy via GitHub
    - [ ] Set `staging` to automatically deploy on push to `staging`
    - [ ] Set `master` to automatically deploy on push to `master`
      - [ ] Check "wait for CI to pass before deploy"

### Access
  - [ ] Add admins and collaborators as needed
