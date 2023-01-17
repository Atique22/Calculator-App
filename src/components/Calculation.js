import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import CalculatorBody from './CalBody';
import CalculatorResult from './CalResult';

export default function Calculate (){

    const [expression, setExpression] = useState('');
    const rapper=(value)=>{
        if(value.includes("=")){
            console.log("equal operator  call");
            console.log(eval(expression));
            setExpression(eval(expression));

        }else{

            setExpression((oldValue)=>{
                return `${oldValue}${value}`;
            })
        }
        
    }
    useEffect(()=>{
        console.log("expression call here value is = "+expression);
        
        // if(expression.includes("C"))
        // {
        //     console.log("CLEAR  "+expression);
        //     // setExpression(0);
        // }
    },[expression])

    return(
        
          <Card style={{ width: '20rem', margin: '1rem'}}>
          <Card.Header>Calculator operators [+,-,/,x]</Card.Header>
            <CalculatorResult result={expression}/>
            <CalculatorBody setExpressionCheck = {rapper}/>
          </Card>
        
    )

}