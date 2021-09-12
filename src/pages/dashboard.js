import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CardSumarry from '../components/card-summary'
import DashboardCalendar from '../components/dashboard-calendar'
import Audits from '../components/audits'
import InsuranceClaim from '../components/insurance-claim'
import DashboardFeed from '../components/dashboard-feed'

const data = [
  {
    title: 'Total Policies',
    total: 14,
  },

  {
    title: 'Total Unasign Assets',
    total: 3,
  },

  {
    title: 'Total Users',
    total: 53,
  },

  {
    title: 'Total Assets',
    total: 1344,
  },

  {
    title: 'Total Audit Assets',
    total: 17,
  },
]

const Dashboard = () => {
  return (
    <Container className="dashboard">
      Dashboard
      <Row>
        <CardSumarry data={data} />
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <DashboardCalendar />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
          <Audits />
        </Col>
        <Col md={6}>
          <InsuranceClaim />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <DashboardFeed />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
