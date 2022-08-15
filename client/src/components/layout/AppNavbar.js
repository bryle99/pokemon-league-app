import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <Navbar bg='dark' expand='lg' variant='dark'>
      <Container>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand>Pokemon-League</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
