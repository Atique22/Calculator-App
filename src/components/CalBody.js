import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculatorBody ({setExpressionCheck}){

    const onClickAction = (e) =>{
        console.log("onClickAction calling ");
        setExpressionCheck(e);

    }

    return(
   
        <Card.Body>
            <Button onClick={() => onClickAction('-')} variant="outline-primary" style={{margin: '0.6rem'}}>-</Button>
            <Button  onClick={() => onClickAction('+')} variant="outline-primary" style={{margin: '0.6rem'}}>+</Button>
            <Button  onClick={() => onClickAction('/')} variant="outline-primary" style={{margin: '0.6rem'}}>/</Button>
            <Button   onClick={() => onClickAction('*')} variant="outline-primary" style={{margin: '0.6rem'}}>x</Button>
            <Button onClick={() => onClickAction(0)} variant="outline-secondary" style={{margin: '0.6rem'}}>0</Button>
            <Button  onClick={() => onClickAction(1)} variant="outline-secondary" style={{margin: '0.6rem'}}>1</Button>
            <Button  onClick={() => onClickAction(2)} variant="outline-secondary" style={{margin: '0.6rem'}}>2</Button>
            <Button  onClick={() => onClickAction(3)} variant="outline-secondary" style={{margin: '0.6rem'}}>3</Button>
            <Button  onClick={() => onClickAction(4)} variant="outline-secondary" style={{margin: '0.6rem'}}>4</Button>
            <Button  onClick={() => onClickAction(5)} variant="outline-secondary" style={{margin: '0.6rem'}}>5</Button>
            <Button  onClick={() => onClickAction(6)} variant="outline-secondary" style={{margin: '0.6rem'}}>6</Button>
            <Button  onClick={() => onClickAction(7)} variant="outline-secondary" style={{margin: '0.6rem'}}>7</Button>
            <Button  onClick={() => onClickAction(8)} variant="outline-secondary" style={{margin: '0.6rem'}}>8</Button>
            <Button  onClick={() => onClickAction(9)} variant="outline-secondary" style={{margin: '0.6rem'}}>9</Button>
            <Button   onClick={() => onClickAction('=')} variant="success" style={{margin: '0.6rem'}} >=</Button>
            </Card.Body>
    )

}