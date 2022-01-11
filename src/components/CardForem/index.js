import React from 'react'
import './CardForem.css'
import {Card} from 'react-bootstrap'

 function CardForem ()   {
    return (
            
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/practicaldev/image/fetch/s--W3ENyuzD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5qrcdj1b4s4jg2jplg93.png" />
                    <Card.Body>
                    <Card.Text>
                        New Forem Changelog Entry!
                    </Card.Text>
                    <Card.Title>
                        <strong>
                            <a href="https://forem.dev/foremteam/changelog-new-creator-setup-process-and-image-improvements-4hc3">
                                → "New Creator Setup Process and Image Improvements"
                            </a>
                        </strong>
                    </Card.Title>

                    </Card.Body>
                </Card>
            

    )
}

export default CardForem

