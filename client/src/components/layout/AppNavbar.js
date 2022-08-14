import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const AppNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    Pokemon-League
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;