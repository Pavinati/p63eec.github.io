import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Header () {
    return(
        <>
        <Container style={{color:"white", backgroundColor: "#bf2886"}}>
  <Row>
    <Col>       
     <img
          class="imglogo w-10"
          src="http://www.sindrome-eec.it/img/LogoEEC.png"
          alt="LogoEEC"
          height="100" width="100"
        />
    </Col>
    <Col  sm={8} >          
        <h2>p63 EEC Syndrome</h2>
        <p>p63 EEC International Network Word Communication Onlus</p>
        <p>Ectrodactyly - Ectodermal Dysplasia - Cleft Syndrome</p></Col>
  </Row>

</Container>

      </>
    )
}
export default Header