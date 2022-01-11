import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import  ListGroup  from 'react-bootstrap/ListGroup'
import  ListGroupItem  from 'react-bootstrap/ListGroupItem'
import "./CardStories.css"
 function CardStories() {
    return (
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kkxvvytot7mztccmawdb.png" width="1000" height="420" />
                <Card.Body>
                    <Card.Title><h3>Stories</h3></Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><a href='#'>MovieFlixer</a></ListGroupItem>
                    <ListGroupItem><a href='#'>Portal to submit hackathon entry</a></ListGroupItem>
                    <ListGroupItem><a href='#'>Simple web application for Mongo DB atlas hackathon</a></ListGroupItem>
                    <ListGroupItem><a href='#'>Konohagakure Search</a></ListGroupItem>
                    <ListGroupItem><a href='#'>Music Space</a></ListGroupItem>
                </ListGroup>
                <Card.Body>

                    <Button>Submit your proyect</Button>
                    <Button>See all posts</Button>

                </Card.Body>
            </Card>
            
        
    )
}

export default CardStories