import React from 'react'
import CardForem from '../CardForem'
import CardStories from '../CardStories'
import Col from 'react-bootstrap/Col'
import CardListings from '../CardListings'




 function SideBarRight() {
    return (
        <Col sm lg={3}>
            <CardForem/>
            <CardStories/>
            <CardListings/>
        </Col>
            
        
    )
}

export default SideBarRight

