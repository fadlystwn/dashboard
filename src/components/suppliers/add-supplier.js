import React from 'react'
import Form from '@rjsf/bootstrap-4'

const schema = {
  type: 'object',
  title: 'Add New Supplier',
  required: ['supplierName', 'Country'],
  properties: {
    supplierName: {
      type: 'string',
      title: 'Supplier Name',
    },
    Country: {
      type: 'string',
      title: 'Country',
    },
    State: {
      type: 'string',
      title: 'State',
    },
    City: {
      type: 'string',
      title: 'City',
    },
    street: {
      type: 'string',
      title: 'Street/Building',
    },
    postalCode: {
      type: 'string',
      title: 'Postal Code / Zip',
    },
    'Contact Person': {
      type: 'string',
      title: 'Contact Persion',
    },
    primaryContact: {
      type: 'string',
      title: 'Primary Contact Number',
    },
    AlternateContact: {
      type: 'string',
      title: 'Alternate Contact Number',
    },
    Email: {
      type: 'string',
      title: 'Email Address',
    },
    website: {
      type: 'string',
      title: 'Website',
    },
    companyId: {
      type: 'string',
      title: 'Company Registration ID',
    },
  },
}


const Addsupplier = (props) => {
  return <Form schema={schema} onSubmit={props.handleSave} />
}

export default Addsupplier
