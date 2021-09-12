import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Card } from 'react-bootstrap'

const DashboardCalendar = () => {
  return (
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </Card.Body>
    </Card>
  )
}

export default DashboardCalendar
