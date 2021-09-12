import React from 'react'
import { Table } from 'react-bootstrap'

const SupplierTable = ({ suppliers }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>View</th>
          <th>supplier Name</th>
          <th>Contact Person</th>
          <th>Contact Number</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {suppliers.data &&
          suppliers.data.map((item) => {
            return (
              <tr key={item.guid}>
                <td>view</td>
                <td>{item.name}</td>
                <td>{item.contact_person}</td>
                <td>{item.contact_number}</td>
                <td>Edit, Delete</td>
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}

export default SupplierTable
