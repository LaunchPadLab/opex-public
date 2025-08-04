# Pull Request (PR) Guidelines

Guidelines for creating pull requests at LaunchPad Lab for three types of users: authors, code reviewers, and QA reviewers.

- **Author**: The creator of the pull request.
- **Code Reviewer**: A developer assigned to the pull request to review the new and/or modified code, not the application's functionality.
- **QA Reviewer**: An individual assigned to the pull request to not only test the new and/or updated functionality introduced by the pull request, but also to raise any issues found related to existing functionality while performing the aforementioned test. A full regression test is not expected for each pull request.

## Authors
- Strive for consistency in your code. Make things easier for yourself by reviewing other areas of the code for patterns and copy/paste vs. starting from scratch
  - However, don't do it blindly. If you know of a better way, bring it up to the team. Maybe we should change the pattern holistically
- Continuously look ahead at tasks/features that are coming up later, and think about how that might affect the task you're working on
- While comments within the code can be extremely helpful, try not to add them when your code is already clear / self documenting. If you can make some small changes (e.g., variable or function naming) to remove the need for a comment, do that
  - And if you make code changes around existing comments, make sure to update those as well to keep them accurate
- If there is an existing [pull request template](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository), follow the steps and comments included
  - These templates will come out-of-the-box when starting a new project using LPL's internal starting applications
- Convert a PR to a [draft pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) if it is not ready for review yet (useful for [long-running](#long-running) prs)
  - If using a different tool that does not support marking a pull request as a draft, then prepend `[DRAFT]` to the title of the pull request
- Link to the appropriate Asana task(s) that the PR addresses
- Specifically call out items / features that are out of scope
- Provide screenshots and instructions to reproduce / find style issues if there are outstanding items that require design assistance
- Add guidance about what the reviewer(s) should focus on
- Document what the QA tester should be testing (or provide a link to where this information is documented e.g., Asana)
- Review the diff and ensure that all changes are relevant and intentional and address all in-scope requirements
  - Leave your own comments on the PR. That forces you to look over all the file changes closely. You might notice refactor opportunities, and can explain why you made certain decisions to help the reviewer
- If the environment has review apps, open the review app to make sure that there are no critical errors **before** assigning for review
  - Otherwise, make sure to test all of the changes locally or in a developer sandbox
- After you receive a review, apply your new learnings to all code changes. Review the diff again to see if the feedback could apply anywhere else
- Merge the PR after approval is received from all assigned reviewers
  - This is typically **your** responsibility, not the reviewer's, but this process may fall to the reviewer depending on your team agreement and/or project timing (e.g., right before a deployment)

## Reviewers
There are some guiding principles that _all_ reviewers should abide by:
- Respond within 24 hours
  - This does not necessarily mean that you have to _review_ the PR in 24 hours, but you must communicate with the author to align on timelines
    - If you cannot review the PR in a sufficient timeline, inform the author and potentially reassign
- Be explicit about what changes / comments are blocking versus non-blocking
- Approval means that the author can merge immediately
  - You are **not** responsible for merging the PR
- Use inclusive language and treat your teammates with respect
- Don't feel like you _have_ to leave a comment

### Code Reviewer
Things to look for:
- Variable naming
- Flagging code that could benefit from additional comments
- Library suggestions / updates
- Refactor opportunities
- Performance concerns

Things to ignore:
- Formatting (spacing, indentation, quoting)

Tip:
- [Hiding whitespace changes](https://share.zight.com/YEu6mj8G) when reviewing the diff helps real changes stand out more clearly

### QA Reviewer
Things to look for:
- Functionality addresses the requirements in the linked Asana task(s)
- Data validations
- UX edge cases
- UX consistency
- Style issues

Things to ignore:
- Anything marked as "out of scope" by the author

## Miscellaneous Notes
### Types of PRs
In general, there are two types of PRs: Long-Running and Granular. The two should be treated differently to make it easier for your teammates.

#### Long-Running
A long-running PR may contain multiple features or an epic. Some best practices include:
- Mark the PR as draft and do not flip it to ready for review until you're ready
- Flag other developers for help if you're stuck on a feature
- Push up when context switching or done for the day
- Keep the description, QA items, and other sections in the PR up-to-date

#### Granular
A granular PR may contain a single feature or even a _slice_ of a single feature. Some best practices include:
- Make sure you are very explicit about what is out of scope
- Avoid this approach on quick projects since a reviewer's feedback could be blocking

### Diff Formatting
For JavaScript projects, our automatic formatting with Prettier sets tabs equal to 2 spaces. You can modify how tabs are displayed in GitHub by changing your tab size preference
  - In your GitHub profile, select "Appearance", find the "Tab size preference" setting and change this to "2" (or whatever spacing your prefer)

### Branch Maintenance
Try to keep our repos clean to make it easy to read through commit history and understand what's in active development
- Once branches are merged in, make sure they're deleted. If you've abandoned a branch (including Closed the PR in GitHub), but it was already pushed up to origin, delete that branch from origin
  - Follow the [Project Setup Guidelines](https://github.com/LaunchPadLab/client-template/blob/main/PROJECT_SETUP_CHECKLIST.md#options) to automatically delete head branches when they're merged through a GitHub PR
- Make sure processes are set with the team around when and how to merge your changes past the `dev` branch
  - One option is to keep branches in sync without merge commits. This means when merging `dev` into `staging`, for example, both branches will be on the same commit to make it clear they are the same code. To implement this strategy, when merging `dev` up to `staging` and `staging` up to `main`, use [fast-forward merges](https://stackoverflow.com/a/29673993) by merging in the terminal and not through a GitHub PR
