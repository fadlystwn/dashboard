import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Pagination, Form, Button } from 'react-bootstrap'
import SupplierTable from '../components/supplier-table'
import SupplierModal from '../components/supplier-modal'
import AddSupplier from '../components/suppliers/add-supplier'
import { supplier, addSupplier, editSupplier } from '../api/supplier'

const Supplier = () => {
  const [show, setShow] = useState(false)
  const [isShowDelete, setIsShowDelete] = useState(false)
  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    supplier()
      .then((res) => {
        setSuppliers(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const page = suppliers && suppliers.meta

  const handleSave = ({formData}) => {
    console.log(formData)

    addSupplier(formData).then( res =>  {
      console.log(res)
    }).catch(err => console.log(err))
  }
  
  const handleDelete = (e, id) => {
    setIsShowDelete(true)
    console.log(e, id)
  }

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
          <SupplierModal
            title="Add New Supplier"
            show={show} 
            handleClose={handleClose}
            >
            <AddSupplier handleSave={handleSave}/>
          </SupplierModal>

          <SupplierTable 
            suppliers={suppliers} 
            handleDelete={handleDelete}
          />
          <SupplierModal
            title="Delete Supplier"
            show={isShowDelete}
            handleClose={handleClose}
            >
              Are you sure want to delete "item name"?
          </SupplierModal>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Pagination size="sm">
            <Pagination.Item>{'<<'}</Pagination.Item>
            <Pagination.Item>{'<'}</Pagination.Item>
            {page &&
              page.links.map((item) => {
                return (
                  <Pagination.Item active={item.active}>
                    {item.label}
                  </Pagination.Item>
                )
              })}
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
          {page && (
            <span>
              Showing {page.from} - {page.to} of {page.total}
            </span>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Supplier
