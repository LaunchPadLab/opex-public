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
			"// import * as Types from 'types'",
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
			"import PropTypes from 'prop-types'",
			"import { compose } from 'recompose'",
			"import { lpForm } from 'lp-form'",
			"import { SubmitButton } from 'lp-components'",
			"// import { Field } from 'redux-form'",
			"",
			"const propTypes = {",
			"\thandleSubmit: PropTypes.func.isRequired,",
			"\tsubmitting: PropTypes.bool.isRequired,",
			"}",
			"",
			"const defaultProps = {}",
			"",
			"function ${1:MyFormComponent} ({ handleSubmit, submitting }) {",
			"\treturn (",
			"\t\t<form onSubmit={ handleSubmit } noValidate>",
			"\t\t\t$0",
			"\t\t\t<SubmitButton {...submitting}>",
			"\t\t\t\tSubmit",
			"\t\t\t</SubmitButton>",
			"\t\t</form>",
			"\t)",
			"}",
			"",
			"${1:MyFormComponent}.propTypes = propTypes",
			"${1:MyFormComponent}.defaultProps = defaultProps",
			"",
			"export default compose(",
			"\tlpForm({",
			"\t\tname: '${1:MyFormComponent}',",
			"\t\tconstraints: {},",
			"}),",
			")(${1:MyFormComponent})"
		],
		"description": "LP-Form enhanced Redux-Form form component"
	},
}

```
