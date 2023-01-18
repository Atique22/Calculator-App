import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CalculatorResult (props){

    return(
        
        <Card.Header style={{  padding: '1.5rem'}}> {props.result}</Card.Header>
    )

}