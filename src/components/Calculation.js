import React, { useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import CalculatorBody from './CalBody';
import CalculatorResult from './CalResult';

export default function Calculate (){

    const [store_value, setStore_value] = useState('');
    let [expression, setExpression] = useState('');
    const rapper=(value)=>{

        try {

            if(value.includes("X")){ //backspace
                
                expression = expression.substring(0, expression.length-1);
                setExpression(expression);
                console.log("backspace is press = "+expression);
            }
            else if(value.includes("=")){ //for equal operator
                console.log("equal operator  call");
                // console.log(eval(expression));
                setStore_value(expression);
                setExpression(window.eval(expression));
    
            }else if(value.includes("C")){ //for clear..
                console.log("clear call");
                // console.log(eval(expression));
                setExpression('');
    
            }else{
    
                setExpression((oldValue)=>{
                    return `${oldValue}${value}`;
                })
            }
        } catch (error) {
            alert("Please Enter a valid user input, error -> "+error);
        }
        
        
    }
    useEffect(()=>{
        console.log("expression call here value is = "+expression);
        
        
    },[expression])

    return(
        
          <Card style={{ width: '25rem', margin: '10rem'}}>
          <Card.Header>Calculator operators [+,-,/,x]</Card.Header>
            <CalculatorResult result={expression} oldValue={store_value} />
            <CalculatorBody setExpressionCheck = {rapper}/>
          </Card>
        
    )

}