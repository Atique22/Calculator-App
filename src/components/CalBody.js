import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculatorBody ({setExpressionCheck}){

    const onClickAction = (e) =>{
        console.log("onClickAction calling ");
        setExpressionCheck(e);  
    }

    const buttonArray = ['C','-','+','/','*',0,1,2,3,4,5,6,7,8,9,'='];
    return(
   
        <Card.Body>
        {  buttonArray.map((item) =><Button  key={item} onClick={() => onClickAction(`${item}`)} variant="outline-secondary" style={{margin: '0.6rem'}}>{item}</Button>)}
        </Card.Body>
    )

}