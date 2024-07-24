import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import PanelSlide from '../components/layout/PanelSlide';
import ProductContainer from '../components/product/ProductContainer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';

function Home() {
  return (
    <div className='home'>
     <Container fluid>
      <Row>
        <Col xs={3}><Sidebar/></Col>
        <Col xs={9}>
          <PanelSlide/>
          <ProductContainer/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col >
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item >{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination></Col>
      </Row>
     </Container>
    </div>
  )
}

export default Home;
