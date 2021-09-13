import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Form from '@rjsf/bootstrap-4'
import profile from '../api/profile';

const schema = {
  type: 'object',

  properties: {
    file: {
      type: 'string',
      format: 'data-url',
      title: 'Single file',
    },
    firstName: {
      type: 'string',
      title: 'First Name',
    },
    lastName: {
      type: 'string',
      title: 'Last Name',
    },
    company: {
      type: 'string',
      title: 'Company',
    },
    department: {
      type: 'string',
      title: 'Department',
    },
    jobTitle: {
      type: 'string',
      title: 'Job Title',
    },
    employeeId: {
      type: 'string',
      title: 'Employee ID',
    },

    phoneNumber: {
      type: 'string',
      title: 'Phone Number',
    },
  },
}

const Profile = () => {

  const [dataProfile, setDataProfile] = useState({})
  useEffect(() => {
    profile().then( (res) => {
      setDataProfile(res.data)
    }).catch(err => console.log(err))
  },[])

  return (
    <div className="profile">
      <Container>
        <Row>
          <Col md={12}>
            <Form schema={schema}>
              <Button>Save</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profile
