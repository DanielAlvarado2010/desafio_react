import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import  ListGroup  from 'react-bootstrap/ListGroup'
import  ListGroupItem  from 'react-bootstrap/ListGroupItem'
import "./CardStories.css"
import { getPosts } from '../../services/posts'


function CardStories() {
     const [stories, setStories] = useState([])

     useEffect(() => {
         const get =(async ()=>{
            const response = await getPosts();
            const parsedResponse = response.posts.filter( post => post.datePublication.month < 12)
            setStories(parsedResponse)
            console.log(parsedResponse)
         });
         get();

         
     }, [])
    return (
        
            <Card style={{ width: '18rem' }} className='side-bar-right-card'>
                <Card.Img variant="top" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kkxvvytot7mztccmawdb.png" />
                <Card.Body>
                    <Card.Title className='card-header'>Stories</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {stories.map(({_id, title})=>(
                        <ListGroupItem className='card-item-list' key={_id}><a href='#' className="card-item-list">{title}</a></ListGroupItem>
                    ))}
                </ListGroup>
                <Card.Body>

                    <Button className='card-purple-button'>Submit your proyect</Button>
                    <Button className='card-gray-button'>See all posts</Button>

                </Card.Body>
            </Card>
            
        
    )
}

export default CardStories