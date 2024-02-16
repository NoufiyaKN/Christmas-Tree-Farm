import React from 'react'
import { Card } from 'react-bootstrap'
import Contact from './Contact'

function FamilyContent() {
  return (
    <>
    <div style={{margin: '100px'}} className="d-flex justify-content-center align-items-center flex-column container">
        <h1 style={{color: '#B93D46',marginTop: '50px'}}>Bring the Family & Enjoy the Festive Activities</h1>
        <p style={{color: 'black',marginLeft: '150px',marginRight: '150px',marginTop: '20px',textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro exercitationem repellat obcaecati odio corrupti voluptatibus voluptatem deserunt magnam quos ullam numquam necessitatibus ex quibusdam quo, sit quis atque! Debitis.Enim porro exercitationem repellat obcaecati odio corrupti voluptatibus voluptatem deserunt magnam quos ullam numquam necessitatibus ex quibusdam quo, sit quis atque! Debitis.</p>
    </div>
    <div className="features mt-5 container">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
            <Card style={{borderColor: '#B93D46'}}>
              <Card.Img style={{height:'300px'}} variant="top" src="https://static.wixstatic.com/media/ea26fd_b67ad5880ad7419e939a426c08bfdb8c~mv2.jpg/v1/fill/w_326,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_b67ad5880ad7419e939a426c08bfdb8c~mv2.jpg" />
              <Card.Body>
                <Card.Title style={{color: '#B93D46',fontSize: '35px',textAlign: 'center'}}>U-Cut <br />Trees</Card.Title>
                <Card.Text style={{height: '150px'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo porro odit illo tenetur ea voluptate adipisci suscipit illum nulla quae repellat pariatur quod cumque, iure, rerum, eius praesentium quibusdam quos!
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{borderColor: '#B93D46'}}>
              <Card.Img style={{height:'300px'}} variant="top" src="https://static.wixstatic.com/media/ea26fd_da3016fd0da648cbb69f81fcd364c22b~mv2.jpg/v1/fill/w_325,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_da3016fd0da648cbb69f81fcd364c22b~mv2.jpg" />
              <Card.Body>
                <Card.Title style={{color: '#B93D46',fontSize: '35px',textAlign: 'center'}}>Hot Chocolate <br />& Cookies</Card.Title>
                <Card.Text style={{height: '150px'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo porro odit illo tenetur ea voluptate adipisci suscipit illum nulla quae repellat pariatur quod cumque, iure, rerum, eius praesentium quibusdam quos!
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
            <div className="col-lg-4">
            <Card style={{borderColor: '#B93D46'}}>
              <Card.Img style={{height:'300px'}} variant="top" src="https://static.wixstatic.com/media/ea26fd_e255e9c830394dd0a19a7434dbd0802e~mv2.jpg/v1/fill/w_325,h_400,al_l,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_e255e9c830394dd0a19a7434dbd0802e~mv2.jpg" />
              <Card.Body>
                <Card.Title style={{color: '#B93D46',fontSize: '35px',textAlign: 'center'}}>Wreaths <br /> & Roping</Card.Title>
                <Card.Text style={{height: '150px'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo porro odit illo tenetur ea voluptate adipisci suscipit illum nulla quae repellat pariatur quod cumque, iure, rerum, eius praesentium quibusdam quos!
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </div>
        </div>    
        <Contact />
        </>
  )
}

export default FamilyContent