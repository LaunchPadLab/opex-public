# React snippets

Defines snippets for common `React` components:

- React-redux components (typically responsible for loading data in a "View")
- Function components (a composable, reusable block of functionality)

### Requirements:

- All snippets assume that you are using the latest Vite-powered version of the client template (>= v14.0.0)
- The react-redux snippet assumes you are using [Redux Toolkit](https://redux-toolkit.js.org/)

## VS Code

Copy the following into your `javascriptreact.json` snippet file:

```
{
	/*
	// Place your snippets for javascriptreact here. Each snippet is defined under a snippet name and has a prefix, body and
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
	// same ids are connected.
	// Example:
	*/
	"React Functional Component": {
		"prefix": "reactFunctionalComponent",
		"body": [
			"// import PropTypes from 'prop-types'",
			"import exact from 'prop-types-exact'",
			"",
			"const propTypes = {}",
			"const defaultProps = {}",
			"",
			"function ${1:MyComponent} () {",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t$0",
			"\t\t</div>",
			"\t)",
			"}",
			"",
			"${1:MyComponent}.propTypes = exact(propTypes)",
			"${1:MyComponent}.defaultProps = defaultProps",
			"",
			"export default ${1:MyComponent}"
		],
		"description": "Stateless React component"
	},

	"React Redux Component": {
		"prefix": "reactReduxComponent",
		"body": [
			"// import { useEffect } from 'react'",
			"// import PropTypes from 'prop-types'",
			"// import * as Types from '#main/types.js'",
			"// import { useDispatch, useSelector } from 'react-redux'",
			"// import { selectors } from '../slice.js'",
			"// import * as apiActions from '#main/apiActions.js'",
			"",
			"const propTypes = {}",
			"const defaultProps = {}",
			"",
			"function ${1:MyComponent} () {",
			"\t// const dispatch = useDispatch()",
			"\treturn (",
			"\t\t<div>",
			"\t\t\t$0",
			"\t\t</div>",
			"\t)",
			"}",
			"",
			"${1:MyComponent}.propTypes = propTypes",
			"${1:MyComponent}.defaultProps = defaultProps",
			"",
			"export default ${1:MyComponent}"
		],
		"description": "Redux connected React component"
	},
}
```
