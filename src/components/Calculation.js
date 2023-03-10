import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CalculatorBody from './CalculatorBody';
import CalculatorResult from './CalculatorResult';
/* eslint-disable no-useless-escape */

export default function Calculate() {

    const [storeValue, setStoreValue] = useState('');
    let [expression, setExpression] = useState('');

    useEffect(() => {
        console.log("expression call here value is = " + expression);
    }, [expression]);
    
    
    const setWrapper = (value) => {
        const myOperators = ['+','-','*','%','/'];
        try {

            if(myOperators.includes(value) && expression && myOperators.includes(expression[expression.length-1])){
                expression = expression.substring(0, expression.length - 1);
                setExpression(expression);
                setExpression((oldValue) => {
                    return `${oldValue}${value}`;
                })
            }else if (value === "x") { //backspace

                expression = expression.substring(0, expression.length - 1);
                setExpression(expression);
                console.log("backspace is press = " + expression);
            }
            else if (value === "=") { //for equal operator
                console.log("equal operator  call");
                // console.log(eval(expression));
                setStoreValue(expression);

                // Split input into an array of numbers and operators
                var elements = expression.split(/\+|\-|\*|\%|\//);
                console.log("elements :" + elements);
                var numbers = elements.map(Number);
                console.log("number :" + numbers);
                var operators = expression.replace(/[\d\.]/g, '').split('');
                console.log("operators :" + operators);
                var result = numbers.shift();
                console.log("result :" + result);
                while (numbers.length > 0) {
                    var operator = operators.shift();
                    var number = numbers.shift();

                    switch (operator) {
                        case '+':
                            result = result + number;
                            break;
                        case '-':
                            result = result - number;
                            break;
                        case '*':
                            result = result * number;
                            break;
                        case '/':
                            result = result / number;
                            break;
                        case '%':
                            result = result / number;
                            break;
                        default:
                            alert('Invalid operator');
                    }
                }
                setExpression(result);

            } else if (value === "C") { //for clear..
                console.log("clear call");
                // console.log(eval(expression));
                setExpression('');
                setStoreValue('');

            } else {

                setExpression((oldValue) => {

                    return `${oldValue}${value}`;
                })
            }
        } catch (error) {
            alert("Please Enter a valid user input, error -> " + error);
        }
    }


    return (

        <Card style={{ width: '20rem', margin: '10rem' }}>
            <Card.Header>Calculator operators [+,-,/,x,%...]</Card.Header>
            <CalculatorResult result={expression} oldValue={storeValue} />
            <CalculatorBody setExpressionCheck={setWrapper} />
        </Card>

    )

}