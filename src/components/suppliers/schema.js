export const schema = {
    "type": "object",
    "properties": {
        "guid": "",
        "name": {
          "type": "string",
          "title": "Supplier Name"
      },
      "address": {
        "type": "object",
        "title": "Address",
        "properties": {
          "country_code": {"type": "string", "enum": ["ID", "SG"]},
          "state": {"type": "string"},
          "city": {"type": "string"},
          "street": {"type": "string"},
          "postcode": {"type": "string"},
          "contact_person": {"type": "string"},
          "contact_number": {"type": "string"},
          "contact_number_alternate": {"type": "string"},
          "email": {"type": "string"},
          "website": {"type": "string", "format": "uri"},
          "registration_number": {"type": "string"}
        }
      },
    },
    "required": ["supplierName", "address"]
  }

  export const uiSchema = {
    "contact": {
      "primaryNumber": {
        "ui:options": {
          inputType: 'tel'
        }
      },
      "alternateNumber": {
        "ui:options": {
          inputType: 'tel'
        }
      },
      "email": {
        "ui:options": {
          inputType: 'email'
        }
      },
    }
  }