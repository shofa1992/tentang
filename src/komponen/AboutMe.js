import React, { Component } from 'react'
import {ListGroup,ListGroupItem,Card,Form, FormControl, Button,Jumbotron,Nav , Navbar, Span, Container,Footer} from 'react-bootstrap';

import image from './saya.png';
export default class AboutMe extends Component {
    render() {
        return (
            <Container-fluid>
                            
             <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">KotaDIGIvice</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#">About</Nav.Link>
            
            </Nav>
            <Form inline>
            
            </Form>
            </Navbar>

              <Jumbotron fluid>
                <Container>
                    <h1>AboutMe</h1>
                    <p>
                    Perkenalkan Nama saya Nur shofa alawi biasa di panggil dengan shofa/.
                    
                    </p>
                </Container>
                </Jumbotron>
                <Container>
                 <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>Pendidikan</Card.Title>
                <Card.Text>
                 Saya adalah mahasiswa lulusan STMIK Nusa Mandiri jakarta jurusan Teknik Informatika
                 dengan IPK 2.52 - 4.00
                </Card.Text>
                <Card.Title>Pengalaman</Card.Title>
                <Card.Text>
                Pengalaman bekerja saya selama 2 tahun sebagai IT Support di PT.Limo Mitra Cinere depok
                </Card.Text>
                <Card.Title>Keahlian</Card.Title>
                <Card.Text>
                php native, laravel, reactks, word, powerpoint, project, visio, visualparadigm
                </Card.Text>
            </Card.Body>
            
            
            </Card>
            </Container>
            <span></span>
     
 
            
                                    </Container-fluid>
                
                
           
        )
    }
    
}
