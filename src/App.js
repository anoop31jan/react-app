import logo from './logo.svg';
import './App.css';
import ViewTask from './component/ViewTask';
import TaskForm from './component/GetTaskDetails';
import { ToastContainer } from 'react-toastify';
import { Col, Container, Row } from 'reactstrap';
import Header from './component/Header';
import Menus from './component/Menues';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';


function App() {
  return (

    <>
      <Router>
        <ToastContainer />
        <Container>
          <Row>
            <Header />
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/view-task" Component={TaskForm} />
                <Route path="/contact" Component={Contact} />
                <Route path="/about-us" Component={AboutUs} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </>
  );
}

export default App;
