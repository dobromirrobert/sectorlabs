import React, { useState } from 'react'
import { Card, ListGroupItem, ListGroup, Button } from 'react-bootstrap';
import GitModal from '../modal/GitModal.js'
import '../../assets/css/CardPost.css'

export default function CardPost() {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <Card >

                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Button onClick={() => setModalShow(true)}>More info</Button>
                </Card.Body>
            </Card>
            <GitModal show={modalShow} onHide={() => setModalShow(false)} />
        </>
    )
}
