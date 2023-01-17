import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CalResult (props){

    return(

        <Card.Header>Result = {props.res}</Card.Header>
    )

}