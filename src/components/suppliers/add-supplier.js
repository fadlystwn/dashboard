import React from 'react'
import Form from '@rjsf/core'
import {schema, uiSchema} from './schema'
import './styles.css'

const Addsupplier = (props) => {
  return (
  <Form
    className="add-supplier"
    schema={schema}
    uiSchema={uiSchema}
    onSubmit={props.handleSave}
    />
  )
}

export default Addsupplier
