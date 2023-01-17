import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import CalculatorBody from './CalBody';
import CalculatorResult from './CalResult';

export default function Calculate (){

    const [expression, setExpression] = useState("");
    useEffect(()=>{
        console.log("expression call here value is = "+expression);
    },[expression])

    return(
        
          <Card style={{ width: '20rem', margin: '1rem'}}>
          <Card.Header>Calculator operators [+,-,/,x]</Card.Header>

            <CalculatorResult result={expression}/>
            <CalculatorBody setExpressionCheck = {setExpression}/>
          </Card>
        
    )

}