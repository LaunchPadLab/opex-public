# Pull Request (PR) Guidelines

Guidelines for creating pull requests at LaunchPad Lab for three types of users: authors, code reviewers, and QA reviewers.

- **Author**: The creator of the pull request.
- **Code Reviewer**: A developer assigned to the pull request to review the new and/or modified code, not the application's functionality.
- **QA Reviewer**: An individual assigned to the pull request to not only test the new and/or updated functionality introduced by the pull request, but also to raise any issues found related to existing functionality while performing the aforementioned test. A full regression test is not expected for each pull request.

## Authors
- If there is an existing [pull request template](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/creating-a-pull-request-template-for-your-repository), follow the steps and comments included
  - These templates will come out-of-the-box when starting a new project using LPL's internal starting applications
- Convert a PR to a [draft pull request](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) if it is not ready for review yet (useful for [long-running](#long-running) prs)
  - Note: if using a different tool that does not support marking a pull request as a draft, then prepend `[DRAFT]` to the title of the pull request
- Link to the appropriate Asana task(s) that the PR addresses
- Specifically call out items / features that are out of scope
- Provide screenshots and instructions to reproduce / find style issues if there are outstanding items that require design assistance
- Add guidance about what the reviewer(s) should focus on
- Document what the QA tester should be testing
- Open the review app to make sure that there are no critical errors **before** assigning for review
- Merge the PR after approval is received from all assigned reviewers
  - This is **your** responsibility, not the reviewer's

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

### QA Reviewer
Things to look for:
- Functionality addresses the requirements in the linked Asana task(s)
- Data validations
- UX edge cases
- UX consistency
- Style issues

Things to ignore:
- Anything marked as "out of scope" by the author

## Miscellaneous Nots
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
- Make sure you are very explicitly about what is out of scope
- Avoid this approach on quick projects since a reviewer's feedback could be blocking
