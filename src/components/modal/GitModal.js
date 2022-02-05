import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import { getGistFileContent } from '../../api/gists'
import Image from 'react-bootstrap/Image'
import loader from '../../assets/images/loader.svg'

export default function GitModal({ show, title, url, onHide }) {
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState("");

    const displayContent = () => {
        if (loading) {
            return (
                <>
                    <Image src={loader} roundedCircle={true} fluid={true} style={{ height: "2.5rem" }} />
                    <div className="py-1">Loading file ...</div>
                </>
            );
        }

        return (
            <Row>
                <Col>
                    <pre>
                        {content}
                    </pre>
                </Col>
            </Row>
        );
    }

    useEffect(() => {
        if (show) {
            getGistFileContent(url, (response) => {
                setLoading(false);
                setContent(response);
            }, () => {
                setContent("Error while fetching the file content.");
            })
        }
    }, [show, url])

    return (
        <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {displayContent()}
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
