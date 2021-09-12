import React from 'react'
import { Card, Table, Pagination } from 'react-bootstrap'
const DashboardFeed = () => {
  return (
    <Card>
      <Card.Header>Feeds</Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              {/* <th>User Updates</th>
                        <th>Audit Status</th>
                        <th>Computer Updates</th>
                        <th>New Assets</th>
                        <th>Assets Updates</th>
                        <th>Setup Updates</th>
                        <th>Location Updates</th> */}
              <th>Name</th>
              <th>Datetime</th>
              <th>Update Detail</th>
              <th>Added By</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hazizarah</td>
              <td>26-08-2021 10:34</td>
              <td>User Logged in</td>
              <td>Hazizarah </td>
            </tr>
          </tbody>
        </Table>
        <Pagination size="sm">
          <Pagination.Item>{'<<'}</Pagination.Item>
          <Pagination.Item>{'<'}</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>{'>'}</Pagination.Item>
          <Pagination.Item>{'>>'}</Pagination.Item>
        </Pagination>
      </Card.Body>
    </Card>
  )
}

export default DashboardFeed
