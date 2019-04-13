# React snippets

Defines `reactFunctionalComponent` and `reactReduxComponent` snippets.

## VS Code 
Copy the following into your `javascript.json` snippet file:
```
{
	/*
	// Place your snippets for JavaScript here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	*/
	"React Functional Component": {
		"prefix": "reactFunctionalComponent",
		"body": [
			"import React from 'react'",
			"// import PropTypes from 'prop-types'",
			"import exact from 'prop-types-exact'",
			"import { pure } from 'recompose'",
			"",
			"const propTypes = {}",
			"",
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
			"export default pure(${1:MyComponent})"
		],
		"description": "Stateless React component"
	},

	"React Redux Component": {
		"prefix": "reactReduxComponent",
		"body": [
			"import React from 'react'",
			"// import PropTypes from 'prop-types'",
			"import { compose } from 'recompose'",
			"import { connect } from 'react-redux'",
			"",
			"const propTypes = {}",
			"",
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
			"${1:MyComponent}.propTypes = propTypes",
			"${1:MyComponent}.defaultProps = defaultProps",
			"",
			"function mapStateToProps () {",
			"\treturn {}",
			"}",
			"",
			"const mapDispatchToProps = {}",
			"",
			"export default compose(",
			"\tconnect(mapStateToProps, mapDispatchToProps),",
			")(${1:MyComponent})"
		],
		"description": "Redux connected React component"
	},
	
	"React LP Form Component": {
		"prefix": "reactLpFormComponent",
		"body": [
			"import React from 'react'",
			"// import PropTypes from 'prop-types'",
			"import { compose } from 'recompose'",
			"import { lpForm } from 'lp-form'",
			"import {",
			"\t// Field,",
			"\tpropTypes as formPropTypes,",
			"} from 'redux-form'",
			"// import { Input, SubmitButton } from 'lp-components'",
			"",
			"const propTypes = {",
			"\t...formPropTypes,",
			"}",
			"",
			"const defaultProps = {}",
			"",
			"function ${1:MyComponent} ({ handleSubmit }) {",
			"\treturn (",
			"\t\t<form onSubmit={ handleSubmit } noValidate>",
			"\t\t\t$0",
			"\t\t</form>",
			"\t)",
			"}",
			"",
			"${1:MyComponent}.propTypes = propTypes",
			"${1:MyComponent}.defaultProps = defaultProps",
			"",
			"export default compose(",
			"\tlpForm({ name: '${2:my-form-name}' }),",
			")(${1:MyComponent})"
		],
		"description": "LP-Form enhanced Redux-Form form component"
	},
}

```
