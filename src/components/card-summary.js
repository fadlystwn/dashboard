import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CardSummary = ({ data }) => {
  return data.map((item) => {
    return (
      <Col md={4}>
        <Card className="mb-3">
          <Card.Body>
            <div className="icon">icon</div>
            <div className="title">{item.title}</div>
            <div className="total">{item.total}</div>
          </Card.Body>
        </Card>
      </Col>
    )
  })
}

export default CardSummary
