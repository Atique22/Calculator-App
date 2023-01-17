import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CalculatorResult (props){

    return(

        <Card.Header> {props.result}</Card.Header>
    )

}