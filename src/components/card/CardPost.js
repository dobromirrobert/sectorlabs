import React, { useState, useEffect } from 'react'
import { Card, ListGroupItem, ListGroup, Button, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import GitModal from '../modal/GitModal.js'
import { getGistForks } from '../../api/gists'
import '../../assets/css/CardPost.css'
import loader from '../../assets/images/loader.svg'

export default function CardPost({ title, url, create, update, files, forkUrl }) {
    const [modalUrl, setModalUrl] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [loading, setLoading] = useState(true);
    const [forks, setForks] = useState([]);

    const displayContent = () => {

        if (loading) {
            return (
                <ListGroupItem key={Math.random()}>
                    <Image src={loader} roundedCircle={true} fluid={true} style={{ height: "2.5rem" }} />
                    <div className="py-1">Loading forks ...</div>
                </ListGroupItem >
            )
        }

        if (forks.length === 0) {
            return (
                <>
                    <ListGroupItem key={Math.random()}>No forks.</ListGroupItem>
                </>
            );
        }

        return forks.map((fork) => {
            return (
                <ListGroupItem key={Math.random()}>
                    <Image src={fork.avatar} roundedCircle={true} fluid={true} style={{ height: "2.5rem" }} />
                    <div className="py-1">{fork.username}</div>
                </ListGroupItem >
            )
        }
        );
    }

    useEffect(() => {

        getGistForks(forkUrl, (response) => {
            let lastestForks = JSON.parse(response).reverse()
            let uniqueOwnerForks = [...new Map(lastestForks.map(item => [item.owner.login, item])).values()]
            let responseForks = uniqueOwnerForks
                .map((fork) => {
                    return {
                        username: fork.owner.login,
                        avatar: fork.owner.avatar_url
                    }
                })
                .filter((f, i) => i < 3)
            setForks(responseForks)
            setLoading(false);
        }, () => {
            setForks([])
            setLoading(false);
        })

    }, [forkUrl])

    let renderTags = Object.keys(files).length > 0 ? (
        <Row>
            <Col>Tags: {Object.keys(files).join(', ')}</Col>
        </Row>
    ) : (<></>)

    let renderFiles = Object.keys(files).map((language) => {
        let filesWithAnchor = files[language].map((f) => {
            return (
                <Button variant="link" key={Math.random()} onClick={() => { handleFileClick(f.fileName, f.rawUrl) }} className="px-0 py-0">
                    {f.fileName}
                </Button>
            );
        }).reduce((prev, curr) => [prev, ', ', curr])

        return (
            <Row key={Math.random()}>
                <Col>{language}: {filesWithAnchor}</Col>
            </Row >
        )
    });

    const handleFileClick = (fileName, rawUrl) => {
        setModalTitle(fileName);
        setModalUrl(rawUrl);
        setModalShow(true);
    }


    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col>Created at: {new Date(create).toUTCString()}</Col>
                        </Row>
                        <Row>
                            <Col>Updated at: {new Date(update).toUTCString()}</Col>
                        </Row>
                        {renderTags}
                        {renderFiles}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {displayContent()}
                </ListGroup>
                <Card.Body>
                    <Button href={url}>View Gist</Button>
                </Card.Body>
            </Card>
            <GitModal show={modalShow} title={modalTitle} url={modalUrl} onHide={() => setModalShow(false)} />
        </>
    )
}
