import React from 'react'
import './UserDetails.css'
import { Card, ListGroup } from 'react-bootstrap'
import { GeoAlt, Globe } from 'react-bootstrap-icons'
const UserDetails = ({ details }) => {
    return (
        <Card id='card'>
            <Card.Img variant="top" src={details.imgSrc} />
            <Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item >Name : {details.name}</ListGroup.Item>
                    <ListGroup.Item >Bio : {details.bio}</ListGroup.Item>
                    <ListGroup.Item >Public Repositories : {details.public_repos}</ListGroup.Item>
                    <ListGroup.Item >Created at : {details.created_at}</ListGroup.Item>
                    <ListGroup.Item ><Globe className='cardIcons' /> <a href={details.html_url}>{details.html_url}</a></ListGroup.Item>
                    <ListGroup.Item ><GeoAlt className='cardIcons' /> {details.location}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}
export default UserDetails