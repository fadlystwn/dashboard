import React from 'react'
import Form from '@rjsf/bootstrap-4'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { schema, uiSchema } from './schema'
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../../routes/auth-context'

const Login = (props) => {
  let history = useHistory()
  let location = useLocation()
  let auth = useAuth()

  let { from } = location.state || { from: { pathname: '/' } }

  const handleSubmit = ({ formData }) => {
    history.replace(from)
    return auth.signIn(formData)
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Card>
            <Card.Body>
              <Form schema={schema} uiSchema={uiSchema} onSubmit={handleSubmit}>
                <Button type="submit">Login</Button>
              </Form>
              {/* <a href="/">Forgot Password</a> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
