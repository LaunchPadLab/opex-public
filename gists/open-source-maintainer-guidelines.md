# Open Source Maintainer Guidelines

Some guidelines for maintaining an open source library at LaunchPad Lab

### 1. The top priority is unblocking ongoing client work.

At the end of the day, these projects exist to serve our client work. This means that:

1. Clear-and-present requirements should be prioritized over long-term hypothetical needs.
2. Bugs that affect client projects should be treated like bugs in the app code of the projects themselves, and should take precedence over new feature work.
3. Features should be battle-tested locally in an app before being moved to a library.

_Note: Work prompted by a particular client project should be billed to that client._

### 2. All issues should be addressed, but not necessarily with a code change.

[This article](https://lord.io/blog/2014/oss-tips/) does a great job of explaining why this is important. “Addressing” an issue can be as simple as saying the issue is out of scope and suggesting a workaround or alternate strategy. As long as the person opening the issue has been unblocked on how to move forward, you can consider it addressed.

In the context of day-to-day work, you should aim to respond to all incoming issues on the repo within 48 hours. This response can be as simple as _"I don't have time to respond to this right now but I can address it at {x time}."_

### 3. You are the expert on the library, but do not need to write all the code.

Your responsibility is primarily as reviewer rather than coder. Don’t be afraid to prompt issue creators to open a PR for themselves, especially if there are urgent client needs. Also, know how to set developers up with a local version of the library to unblock them in the short term.

At the end of the day, the developer(s) assigned to a client project are ultimately responsible for that project’s completion, whether or not it uses the library.

### 4. The library should exist in a state where contribution is easy.

This guideline follows from the previous one. If contribution is straightforward and low-risk, it allows developers to work uninterrupted and alleviates your workload as a maintainer. This is ultimately subjective, but some practices that can help lower the bar to contribution are:

1. Adding a [template](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates#pull-request-templates) for incoming PRs ([issue templates](https://help.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates#issue-templates) exist as well).
1. Preemptively commenting any unintuitive code in the library.
1. Adhering to semantic versioning on releases.
1. Requiring tests and documentation for all new features and bug fixes.

---

_Thanks for reading, and happy maintaining!_
