import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import "./CardListings.css"
 function CardListings() {
    return (
        
            <Card style={{ width: '18rem' }} className='side-bar-right-card'>
                <Card.Header className='card-header'>
                    <h4 >Listings</h4>
                    <a href="#" className='hyperlink-purple-header'>See all</a>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className='card-item-list'><a href="#" className='card-item-list'>Cras justo odio</a></ListGroup.Item>
                    <ListGroup.Item className='card-item-list'><a href="#" className='card-item-list'>Dapibus ac facilisis in</a></ListGroup.Item>
                    <ListGroup.Item className='card-item-list'><a href="#" className='card-item-list'>Vestibulum at eros</a></ListGroup.Item>
                    <ListGroup.Item className='card-item-list'>Create a Listings</ListGroup.Item>
                </ListGroup>

            </Card>  
        
    )
}


export default CardListings

