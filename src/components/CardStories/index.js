import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import  ListGroup  from 'react-bootstrap/ListGroup'
import  ListGroupItem  from 'react-bootstrap/ListGroupItem'
import "./CardStories.css"
 function CardStories() {
    return (
        
            <Card style={{ width: '18rem' }} className='side-bar-right-card'>
                <Card.Img variant="top" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kkxvvytot7mztccmawdb.png" />
                <Card.Body>
                    <Card.Title className='card-header'>Stories</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className='card-item-list'><a href='#' className="card-item-list">MovieFlixer</a></ListGroupItem>
                    <ListGroupItem className="card-item-list"><a href='#' className="card-item-list">Portal to submit hackathon entry</a></ListGroupItem>
                    <ListGroupItem className="card-item-list"><a href='#' className="card-item-list">Simple web application for Mongo DB atlas hackathon</a></ListGroupItem>
                    <ListGroupItem className="card-item-list"><a href='#' className="card-item-list">Konohagakure Search</a></ListGroupItem>
                    <ListGroupItem className="card-item-list"><a href='#' className="card-item-list">Music Space</a></ListGroupItem>
                </ListGroup>
                <Card.Body>

                    <Button className='card-purple-button'>Submit your proyect</Button>
                    <Button className='card-gray-button'>See all posts</Button>

                </Card.Body>
            </Card>
            
        
    )
}

export default CardStories