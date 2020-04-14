import Layout from '../components/Layout/Layout'
import './errors.scss'
import {
  Container,
  Col,
  Row
} from 'reactstrap'
function Error({ statusCode }: any) {
  return (
    <Layout>
      <Container className='page-404'>
        <Row style={{ height: 'inherit' }}>
          <Col xs='12'>
            <h3 style={{ color: 'white' }}>
              {statusCode} | Page not found
            </h3>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
