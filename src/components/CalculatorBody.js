import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalculatorBody({ setExpressionCheck }) {

    // const inputActivity = () => {
    //     console.log("inputActivity call");
    //     // let expression = "This is the original string";
    //  const pattern = /(\*\-)|(\-\+)|(\%\+)|(\/\+)|(\*\+)|(\+\*)|(\-\*)|(\%\*)|(\/\*)|(\*\*)|(\+\%)|(\-\%)|(\%\%)|(\/\%)|(\*\%)|(\+\/)|(\-\/)|(\%\/)|(\/\/)|(\*\/)|(\+\-)|(\-\-)|(\%\-)|(\/\-)|(\+\+)/g;
    //  expression = expression.replace(pattern, function (match) {
    //     if ((match === "++")|(match === "-+")|(match === "*+")|(match === "/+")|(match === "%+")) return "+";
    //     else if ((match === "+-")|(match === "--")|(match === "*-")|(match === "/-")|(match === "%-")) return "-";
    //     else if ((match === "+%")|(match === "-%")|(match === "*%")|(match === "/%")|(match === "%%")) return "%";
    //     else if ((match === "+*")|(match === "-*")|(match === "**")|(match === "/*")|(match === "%*")) return "*";
    //     else if ((match === "+/")|(match === "-/")|(match === "*/")|(match === "//")|(match === "%/")) return "/";
            
    //     });
    //     console.log(expression);
    //     setExpression(expression);
    // }
    const [oldValue, setOldValue] = useState('');

    const onClickAction = (value) => {
        
        console.log("onClickAction calling ");
        console.log("previous value:"+oldValue);
        console.log("current value:"+value);

        if(value==='C'|value==='x'|value==='='){
            setExpressionCheck(value);
            setOldValue(value);
        }else if(oldValue ==='x' | oldValue === '=' | oldValue === 'C') 
        {
            setExpressionCheck(value);
            setOldValue(value);
        }else if(isNaN(value) && isNaN(oldValue) && (oldValue !=='x' | oldValue !== '=' | oldValue !== 'C' | value !=='x' | value !== '=' | value !== 'C')) 
        {
            console.log("more than one operator call at same time (errors)");
        }else{
            setExpressionCheck(value);
            setOldValue(value);
        }      
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