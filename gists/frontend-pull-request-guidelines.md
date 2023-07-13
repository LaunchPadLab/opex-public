# Frontend Pull Request Guidelines
This document details guidelines for reviewing frontend (especially LPL React-flavored) code. Some of these suggestions may apply more broadly to software development in general, but are mentioned here specifically based on the frequency with which they have been observed in client-side code.

## HTML
- The default [`type` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) for a button is `submit`. If `type="button"` is not explicitly declared and that button is included within a form, it can submit the form (e.g., a reset button). It's best practice to always include the `type` attribute, which usually will be `button`
  - Example: https://codesandbox.io/s/button-type-woes-zl0wm2
- Images should **always** have an `alt` attribute declared, but they **shouldn't always** include text
  - [Decorative images](https://www.w3.org/WAI/tutorials/images/decorative/) that don't provide additional information should be hidden from assistive technologies via an empty `alt` attribute (i.e., `alt=""`). The behavior this adds is distinctly different than not including an `alt` attribute at all
    - This needs to be handled a bit differently for [inline svgs](https://css-tricks.com/accessible-svgs/), most commonly via `aria-hidden="true"`
  - Images that are informational should have [good alt text](https://www.semrush.com/blog/alt-text/#alt-text-best-practices)
  - Alternative text can be provided for SVGs by adding an [`aria-label`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) to the appropriate parent element
- There should only be [one `h1` on a page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements#avoid_using_multiple_h1_elements_on_one_page) and heading levels should **not** be skipped (i.e., `h1` is followed by `h2`, not `h3`)
  - Do not choose a heading level based on styling – use CSS to style the semantically appropriate heading level for that particular page
- Users should be able to achieve the same (or similarly equivalent) functionality by only using a keyboard or a screenreader

## CSS
- First and foremost, does the page look like it should?
  - On all in-scope devices? 
- If you see an `!important` in the diff, ask the author about it. 95% of the time you shouldn't need it
- If a color is used, check to see if it has already been defined as a variable. If it hasn't, ask the author if it _should_ be a known color
- Follow project conventions for class names (e.g., [BEM](http://getbem.com/introduction/), casing)
- Make sure class names make sense, are intention-revealing, and make sense in the context where they're being used
- Make sure properties have valid values and are being used correctly. For example, `height` on an inline element does nothing
- Prefer the usage of shorthand properties (if applicable)
  ```scss
  // Subpar
  .custom-class {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  // Better
  .custom-class {
    padding: 0 10px;
  }
  ```
- Avoid hardcoded sizes, when possible. In some instances, it might make sense to explicitly set padding or margin values in `px` when the values _shouldn't_ scale with font-size. However, in most cases units like `em`, `rem`, `%`, `vh`, and `vw` are better for responsiveness and accessibility
  - [Never set `font-size` using `px`](https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/)
- Review the scope of changes/additions to existing rules
  - If a rule is too vague (e.g., applied to all elements of a class without any nesting), it could affect other existing areas of the application inadvertently
- Review the need to add a `z-index` _and_ its value. Most of the time, you'll find that a z-index of 1 or 2 will suffice
  - In some cases, changing the order of HTML elements will suffice
  - In other cases, newer properties like [`isolation: isolate`](https://developer.mozilla.org/en-US/docs/Web/CSS/isolation) can be used to create a new stacking context, which isolates the change and helps mitigate against the 999999s

## JavaScript
- Avoid hasty abstractions. It's ok to repeat code and wait until you have more information to have a proper design for a reusable function or component. Don Roberts's [rule of 3](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)) comes in handy
- Utils should follow the [single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle). If a util requires several distinct actions in service of a single purpose, those should be broken up into "private" local functions for clarity
  ```js
  /* Subpar */
  function safeAdd(numA, numB) {
    let sanitizedNumA = Number(numA)
    let sanitizedNumB = Number(numB)
    if (isNaN(sanitizedNumA))
      sanitizedNumA = 0
    if (isNaN(sanitizedNumB))
      sanitizedNumB = 0

    return sanitizedNumA + sanitizedNumB
  }

  export default safeAdd

  /* Better */
  function safeAdd(numA, numB) {
    return sanitize(numA) + sanitize(numB)
  }

  function sanitize(num) {
    let sanitized = Number(num)
    return isNaN(sanitized) ? 0 : sanitized
  }

  export default safeAdd
  ```
- If a function accepts more than 3 arguments, the order of the arguments is not intuitive, or some of the arguments are optional, then use named arguments over positional arguments
  ```js
  /* Subpar */
  function formatName(firstName, middleName, lastName, title, suffix) {
    return [
      title, firstName, middleName, lastName, suffix
    ].filter(Boolean).join(" ")
  }

  formatName("Anthony", null, "Soprano", null, "Jr") // Anthony Soprano Jr

  /* Better */
  function formatName({ firstName, middleName, lastName, title, suffix }) {
    return [
      title, firstName, middleName, lastName, suffix
    ].filter(Boolean).join(" ")
  }

  formatName({
    title: "Jr",
    firstName: "Anthony",
    lastName: "Soprano"
  }) // Anthony Soprano Jr
  ```
- If there is a particularly complicated util / functionality, check to see if [lodash](https://lodash.com/docs/4.17.15) has something that fits your needs. If not, write unit tests
- If something is no longer being used, it's better to delete it! The more code you have, the more bugs you have
  - This applies to files, functions, lines of code, styles, and comments. If it turns out that you need it, you can retrieve it from the Git history
- Avoid [variable shadowing](https://en.wikipedia.org/wiki/Variable_shadowing) (i.e., using the same name for variables in different scopes). This leads to code that can be hard to read and defects that are difficult to diagnose
- Duplicating context or sowing confusion with a variable name (e.g., using a singular `participant` variable for an array of participants)
  - Refer to the [variable naming cheatsheet](https://github.com/kettanaito/naming-cheatsheet) for more examples
- You probably don't need [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). Most applications of reduce can be simplified and more performant when using [local mutation](https://typeofnan.dev/mutation-isnt-always-bad-in-javascript/)

## React
- You should virtually **never** add an `onClick` prop to anything other than a `button` element
  - The `button` element contains several accessibility features out-of-the-box, including keyboard support. Creating custom markup isn't worth it and requires a lot of additional attributes to reach parity with user's expectations
- You probably don't need `useEffect` (unless you're fetching data). Setting state in a `useEffect` is typically code smell for a use case for deriving the state, instead of syncing it
  - https://react.dev/learn/you-might-not-need-an-effect
  - https://kentcdodds.com/blog/dont-sync-state-derive-it
- Loose prop type definitions breed defects. Be as specific as you can when defining a prop type and place custom shapes in `types.js`
  - You should virtually never use `PropTypes.object` or `PropTypes.array`, instead reach for `PropTypes.shape` and `PropTypes.arrayOf`, respectively
- If a prop is _not_ required, it should have a sensible default declared in `defaultProps`
- Only put truly global components in `src/js/components`. If a component only applies to one subsection, keep it in that subsection's `components` folder and only move it to the global component folder if another use case for it comes up
- Try to avoid passing React state and state setters (e.g., `x`, `setX`) directly to another component
  - This couples the child component to the parent's implementation and typically is more so just rearranging files, rather than aligning with the React component-paradigm by creating a reusable, composable interface
  - Reevaluate your decision to create a separate component or look for other ways to compose the functionality together (e.g., use [`children`](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children), move state down, use the [render prop pattern](https://reactjs.org/docs/render-props.html))
- If you're referencing a hardcoded string (or enumeration of strings), place them in `config.js` and reference them via the aliased `config` import location
  - By convention, constants are cased using SCREAMING_SNAKE_CASE
- Never mutate a value held in the Redux store
  - https://redux.js.org/faq/immutable-data#why-is-immutability-required-by-redux
