import React from 'react'
import { Card, ProgressBar } from 'react-bootstrap'

const Audits = () => {
  return (
    <Card>
      <Card.Header>Assets Category By Audits Status</Card.Header>
      <Card.Body>
        <ProgressBar now={60} />
      </Card.Body>
    </Card>
  )
}

export default Audits
