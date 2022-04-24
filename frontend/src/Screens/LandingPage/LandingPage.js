import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"

const LandingPage= ({history}) => {
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if(userInfo){
            history.push("/mydocs");
        }
      }, [history])
        
    return (
        <div className='main'>
        <Container >
            <Row>
                <div className="intro-text">
                    <div>
                        <h1 className='title'>Welcome to Documentor</h1>
                        <p className='subtitle'>Place to keep your documents</p>
                    </div>
                    <div className='buttonContainer'>
                        <a href='/login'>
                            <Button size="lg" className='landingbutton'>Login</Button>
                        </a>
                 
                       
                        <a href='/SignUp'>
                            <Button size="lg" className='landingbutton' variant="outline-primary">Signup</Button>
                        </a>
                        </div>
                </div>
            </Row>
        </Container>
        </div>
    )
}

export default LandingPage
