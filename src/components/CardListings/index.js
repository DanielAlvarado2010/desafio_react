import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
 function CardListings() {
    return (
        
            <Card style={{ width: '18rem' }}>
                <Card.Header>
                    <h3>Listings</h3>
                    <a href="#">Vestibulum at eros</a>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item><a href="#">Cras justo odio</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Dapibus ac facilisis in</a></ListGroup.Item>
                    <ListGroup.Item><a href="#">Vestibulum at eros</a></ListGroup.Item>
                    <ListGroup.Item>Create a Listings</ListGroup.Item>
                </ListGroup>

            </Card>  
        
    )
}


export default CardListings

