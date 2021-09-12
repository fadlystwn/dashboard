import React, { useState, useEffect} from 'react'
import { Container, Col, Row, Pagination, Form, Button } from 'react-bootstrap'
import SupplierTable from '../components/supplier-table'
import SupplierModal from '../components/supplier-modal'
import AddSupplier from '../components/suppliers/add-supplier'
import {supplier, addSupplier, editSupplier} from '../api/supplier'

const Supplier = () => {
  const [show, setShow] = useState(false)
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    supplier().then( res => {
      setSuppliers(res.data)
      
    }).catch( err => console.log(err))
  }, [])


  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  
  const page = suppliers && suppliers.meta;
  
  console.log(page)

  return (
    <Container>
      <Row className="my-3">
        <Col md={6}>
          <p>supplier</p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Button onClick={handleShow}>Add New supplier</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          
          <SupplierModal show={show} handleClose={handleClose}>
            <AddSupplier />
          </SupplierModal>

          <SupplierTable suppliers={suppliers}/>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Pagination size="sm">
            <Pagination.Item>{'<<'}</Pagination.Item>
            <Pagination.Item>{'<'}</Pagination.Item>
            {
              page && page.links.map( item => {
                return (
                  <Pagination.Item active={item.active}>{item.label}</Pagination.Item>
                )
              })
            }
            <Pagination.Item>{'>'}</Pagination.Item>
            <Pagination.Item>{'>>'}</Pagination.Item>
          </Pagination>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <Form.Control
            className="w-25 mr-3"
            size="sm"
            aria-label="Default"
            type="text"
            as="select"
          >
            <option>{15}</option>
          </Form.Control>
          {
            page &&  <span>Showing {page.from} - {page.to} of {page.total}</span>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Supplier
