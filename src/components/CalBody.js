import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CalBody (){

    const [data, setData] = useState(0);
    const HandleOperator = (e) =>{
        console.log("handle use-effect calling "+data);
        
        setData(e);
        console.log("handle function calling "+e);

    }

    return(
    <>
        <Card.Body>
            <Button onClick={() => HandleOperator('-')} variant="outline-primary" style={{margin: '0.6rem'}}>-</Button>
            <Button  onClick={() => HandleOperator('+')} variant="outline-primary" style={{margin: '0.6rem'}}>+</Button>
            <Button  onClick={() => HandleOperator('/')} variant="outline-primary" style={{margin: '0.6rem'}}>/</Button>
            <Button   onClick={() => HandleOperator('*')} variant="outline-primary" style={{margin: '0.6rem'}}>x</Button>
            <Button onClick={() => HandleOperator(0)} variant="outline-secondary" style={{margin: '0.6rem'}}>0</Button>
            <Button  onClick={() => HandleOperator(1)} variant="outline-secondary" style={{margin: '0.6rem'}}>1</Button>
            <Button  onClick={() => HandleOperator(2)} variant="outline-secondary" style={{margin: '0.6rem'}}>2</Button>
            <Button  onClick={() => HandleOperator(3)} variant="outline-secondary" style={{margin: '0.6rem'}}>3</Button>
            <Button  onClick={() => HandleOperator(4)} variant="outline-secondary" style={{margin: '0.6rem'}}>4</Button>
            <Button  onClick={() => HandleOperator(5)} variant="outline-secondary" style={{margin: '0.6rem'}}>5</Button>
            <Button  onClick={() => HandleOperator(6)} variant="outline-secondary" style={{margin: '0.6rem'}}>6</Button>
            <Button  onClick={() => HandleOperator(7)} variant="outline-secondary" style={{margin: '0.6rem'}}>7</Button>
            <Button  onClick={() => HandleOperator(8)} variant="outline-secondary" style={{margin: '0.6rem'}}>8</Button>
            <Button  onClick={() => HandleOperator(9)} variant="outline-secondary" style={{margin: '0.6rem'}}>9</Button>

            <Button   onClick={() => HandleOperator('=')} variant="success" style={{margin: '0.6rem'}} >=</Button>


            </Card.Body>
    </>

    )

}