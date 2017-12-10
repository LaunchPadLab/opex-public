Sometimes when we are collaborating with external development teams, they are curious about our "development process." While this touches on a lot of themes, I've compiled a quick brain dump of what we do. This could also server a similar purpose for on-boarding new devs that join LPL.

**Version Control**
We use git for version control. Typically our projects have 3 stable branches of `dev` -> `staging` -> `master`. Each of these `master` branch corresponds to our production environment and `staging` corresponds to our staging or QA environment.

**Code Review**
We review all code through GitHub's pull request (PR) process. Each has an attached list of functionality as well as explanatory comments. A PR is assigned to a project lead dev that answers questions over email or pairs on architecture questions.

**Continuous Integration**
Each PR corresponds to a review app that can QA'ed against. Additionally, each PR is static-code analyzed by CodeClimate for syntax and security issues. For each PR, we hook into Codeship to run our automated testing (ex. Rspec, Cypress for UI testing). As a PR is merged, the code is deployed to the next stage environment that is typically managed in a [Heroku Pipeline](https://devcenter.heroku.com/articles/pipelines).

**App Code**
Within our application code, we typically do the following:
- Transform design mockups and create a styleguide of UI components (currently written in React)
- Front-end code is built using React along with SASS compilation for our component-based styles
- When developing an API, we document and store sample request/responses in a tool called [Postman](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=13&cad=rja&uact=8&ved=0ahUKEwitlrjBj9rWAhWn54MKHf2MD0cQFghgMAw&url=https%3A%2F%2Fwww.getpostman.com%2F&usg=AOvVaw1vWzpwzQOHi5ErKZnywLDR)
