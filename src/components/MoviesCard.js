import React from "react";
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';



function MoviesCard({ el }) {
    return (
        
        <Card style={{ width: '18rem', margin:'10px', borderRadius:'20px'}}>
            <Card.Text >
                    <h2 style={{color:'brown'}}>Rate</h2><h3 style={{color:'#b8860b'}}>&#x2605;{el.rate}</h3>
                </Card.Text>
            <Card.Img style={{width:'18rem',height:'400px', borderRadius:'20px'}} variant="top" src={el.posterUrl} />
            <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>
                    {el.description}
                </Card.Text>
            </Card.Body>
            <iframe title = 'trailer' src={el.trailer}  style={{width:'16rem', height:'160px' , borderRadius:'20px', alignSelf:'center', marginBottom:'20px'}}/>
        </Card>)
}

MoviesCard.propTypes = {
    children: PropTypes.object,
}
export default MoviesCard;