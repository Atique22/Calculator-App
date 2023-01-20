import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculatorBody({ setExpressionCheck }) {

    const onClickAction = (value) => {
        console.log("onClickAction calling ");
        setExpressionCheck(value);
    }

    const buttonArray = [{ value: 'C', color: 'danger' }, { value: '-', color: 'primary' }, { value: '+', color: 'primary' }, { value: 'x', color: 'warning' }, 
    { value: 7, color: 'secondary' },{ value: 8, color: 'secondary' },{ value: 9, color: 'secondary' },{ value: '*', color: 'primary' },
    { value: 4, color: 'secondary' },{ value: 5, color: 'secondary' },{ value: 6, color: 'secondary' },{ value: '/', color: 'primary' }, 
    { value: 1, color: 'secondary' }, { value: 2, color: 'secondary' },{ value: 3, color: 'secondary' },{ value: '%', color: 'primary' },
    { value: '.', color: 'secondary' },{ value: '0', color: 'secondary' },{ value: '00', color: 'secondary' },{ value: '=', color: 'success' },
    
    ];
    return (

        <Card.Body style={{ padding: '1.5rem', border: '0.5px' }}>
            {buttonArray.map((index) => <Button size='lg' key={index.value} onClick={() => onClickAction(`${index.value}`)} variant={index.color} style={{ margin: '0.6rem' }}>{index.value}</Button>)}        
        </Card.Body>
    )

}