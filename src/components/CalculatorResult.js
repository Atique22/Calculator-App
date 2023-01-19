import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CalculatorResult(props) {

    return (
        <>
            <Card.Header style={{ padding: '1.5rem', border: 'none' }}> {props.oldValue}   </Card.Header>
            <Card.Header style={{ padding: '1.5rem', border: 'none' }}> {props.result}   </Card.Header>
        </>
    )

}