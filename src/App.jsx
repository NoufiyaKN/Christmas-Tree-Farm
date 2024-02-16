import './App.css'
import Join from './components/Join';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Carousel } from 'react-bootstrap';
function App() {

  return (
    <>
      <Carousel fade>
          <Carousel.Item className='caro'>
            <img
              className="d-block w-100 image"
              src="https://static.wixstatic.com/media/ea26fd_2062be5b261245bcad29fdea2247c56b~mv2.jpg/v1/fill/w_980,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_2062be5b261245bcad29fdea2247c56b~mv2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            <Navbar className="bg-body-tertiary mynav">
              <Container style={{backgroundColor: '#B93D46'}}>
                <Navbar.Brand id="nav1" className='mb-0 mx-auto' style={{color: 'white'}}><i className="fa-solid fa-circle-exclamation me-3"></i>Can't make it to the farm? Call us at 123-456-7890</Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container style={{border: '1px solid #B93D46',marginTop : '-20px'}}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto mb-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className='ms-5' style={{color: '#B93D46'}}>Home</Nav.Link>
                    <Nav.Link href="#action2" className='me-5'>Contact</Nav.Link>
                    <Navbar.Brand className='fw-bolder ms-5 ' style={{fontSize : '30px',color: '#B93D46'}} href="#">Two Pines Xmas Tree Farm</Navbar.Brand>
                  </Nav>
                  <Form className="d-flex">
                    <i class="fa-brands fa-instagram me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-facebook-f me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-yelp me-3 mt-2" style={{color: 'black'}}></i>
                      <button id='btn1' class="btn me-5" style={{height:'50px',width: '100px',borderRadius: '0px'}} type="submit">Call Today</button>          </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1 id="mainh1" style={{fontSize: '70px',marginTop : '150px'}}>Growing Family <br /> Traditions</h1>
            <p id='mainp'>Cut your own Christmas tree and get your holiday greenery!</p>
            <button id="mainb" className='btn' style={{backgroundColor:'#B93D46',borderColor: 'white',color: 'white'}}>Give Us a call</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            
            <img
              className="d-block w-100 image"
              src="https://static.wixstatic.com/media/ea26fd_4521f23613f445688b92d886e94e8472~mv2.jpg/v1/fill/w_980,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_4521f23613f445688b92d886e94e8472~mv2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <Navbar className="bg-body-tertiary mynav">
              <Container style={{backgroundColor: '#B93D46'}}>
                <Navbar.Brand id="nav1" className='mb-0 mx-auto' style={{color: 'white'}}><i className="fa-solid fa-circle-exclamation me-3"></i>Can't make it to the farm? Call us at 123-456-7890</Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container style={{border: '1px solid #B93D46',marginTop : '-20px'}}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto mb-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className='ms-5' style={{color: '#B93D46'}}>Home</Nav.Link>
                    <Nav.Link href="#action2" className='me-5'>Contact</Nav.Link>
                    <Navbar.Brand className='fw-bolder ms-5 ' style={{fontSize : '30px',color: '#B93D46'}} href="#">Two Pines Xmas Tree Farm</Navbar.Brand>
                  </Nav>
                  <Form className="d-flex">
                      <i class="fa-brands fa-instagram me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-facebook-f me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-yelp me-3 mt-2" style={{color: 'black'}}></i>
                      <button id='btn1' class="btn me-5" style={{height:'50px',width: '100px',borderRadius: '0px'}} type="submit">Call Today</button>          </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1 id="mainh1" style={{fontSize: '70px',marginTop : '150px'}}>Growing Family <br /> Traditions</h1>
            <p id='mainp'>Cut your own Christmas tree and get your holiday greenery!</p>
            <button id="mainb" className='btn' style={{backgroundColor:'#B93D46',borderColor: 'white',color: 'white'}}>Give Us a call</button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 image"
              src="https://static.wixstatic.com/media/ea26fd_74f870b3971e4e4cb3abe01ca607f544~mv2.jpg/v1/fill/w_980,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_74f870b3971e4e4cb3abe01ca607f544~mv2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <Navbar className="bg-body-tertiary mynav">
              <Container style={{backgroundColor: '#B93D46'}}>
                <Navbar.Brand id="nav1" className='mb-0 mx-auto' style={{color: 'white'}}><i className="fa-solid fa-circle-exclamation me-3"></i>Can't make it to the farm? Call us at 123-456-7890</Navbar.Brand>
              </Container>
            </Navbar>
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container style={{border: '1px solid #B93D46',marginTop : '-20px'}}>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto mb-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1" className='ms-5' style={{color: '#B93D46'}}>Home</Nav.Link>
                    <Nav.Link href="#action2" className='me-5'>Contact</Nav.Link>
                    <Navbar.Brand className='fw-bolder ms-5 ' style={{fontSize : '30px',color: '#B93D46'}} href="#">Two Pines Xmas Tree Farm</Navbar.Brand>
                  </Nav>
                  <Form className="d-flex">
                    <i class="fa-brands fa-instagram me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-facebook-f me-3 mt-2" style={{color: 'black'}}></i>
                      <i class="fa-brands fa-yelp me-3 mt-2" style={{color: 'black'}}></i>
                      <button id='btn1' class="btn me-5" style={{height:'50px',width: '100px',borderRadius: '0px'}} type="submit">Call Today</button>          </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1 id="mainh1" style={{fontSize: '70px',marginTop : '150px'}}>Growing Family <br /> Traditions</h1>
            <p id='mainp'>Cut your own Christmas tree and get your holiday greenery!</p>
            <button id="mainb" className='btn' style={{backgroundColor:'#B93D46',borderColor: 'white',color: 'white'}}>Give Us a call</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Join />
    </>
  )
}

export default App
