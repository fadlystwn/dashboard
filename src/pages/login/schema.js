export const schema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
      type: 'string',
      title: 'email',
    },
    password: {
      type: 'string',
      title: 'password',
    },
  },
}

export const uiSchema = {
  email: {
    'ui:widget': 'email',
  },
  password: {
    'ui:widget': 'password',
  },
}
