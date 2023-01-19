import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculatorBody({ setExpressionCheck }) {

    const onClickAction = (e) => {
        console.log("onClickAction calling ");
        setExpressionCheck(e);
    }

    const buttonArray = [{ id: 'C', color: 'danger' }, { id: '-', color: 'primary' }, { id: '+', color: 'primary' }, { id: 'x', color: 'warning' }, 
    { id: 7, color: 'secondary' },{ id: 8, color: 'secondary' },{ id: 9, color: 'secondary' },{ id: '*', color: 'primary' },
    { id: 4, color: 'secondary' },{ id: 5, color: 'secondary' },{ id: 6, color: 'secondary' },{ id: '/', color: 'primary' }, 
    { id: 1, color: 'secondary' }, { id: 2, color: 'secondary' },{ id: 3, color: 'secondary' },{ id: '%', color: 'primary' },
    { id: '.', color: 'secondary' },{ id: '0', color: 'secondary' },{ id: '00', color: 'secondary' },{ id: '=', color: 'success' },
    
    ];
    //,'-','+','/','<-','*',0,1,2,3,'%',4,5,6,7,'=',8,9,'.','00'
    return (

        <Card.Body style={{ padding: '1.5rem', border: '1px' }}>
            {buttonArray.map((item, color) => <Button size='lg' key={item.id} onClick={() => onClickAction(`${item.id}`)} variant={item.color} style={{ margin: '0.6rem' }}>{item.id}</Button>)}
        </Card.Body>
    )

}