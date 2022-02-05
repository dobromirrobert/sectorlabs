import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export default function NavigationBar() {

    return (
        <Navbar fixed="top" expand="lg" bg={'light'}>
            <Container fluid class="searchbar">
                <Navbar.Brand>SectorLabs</Navbar.Brand>
            </Container>
        </Navbar >
    )
}
