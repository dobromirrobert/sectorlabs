import { Container, Col, Row } from 'react-bootstrap';
import SearchBar from '../searchbar/SearchBar';
import NavigationBar from '../navigationbar/NavigationBar';
import CardPost from '../card/CardPost'
import '../../assets/css/App.css';

export default function App() {
  return (
    <div className="App">

      <Container>
        <Row>
          <Col><NavigationBar /></Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={{ span: 12, offset: 0 }}><SearchBar /></Col>
        </Row>
        <Row >
          <Col md={{ span: 6, offset: 3 }} xs={{ span: 12, offset: 0 }}><CardPost></CardPost></Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }} xs={{ span: 12, offset: 0 }}><CardPost></CardPost></Col>
        </Row>
      </Container>
    </div >
  );
}


