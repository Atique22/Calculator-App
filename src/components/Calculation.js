import React from 'react';
import Card from 'react-bootstrap/Card';
import CalBody from './CalBody';
import CalResult from './CalResult';

export default function Calculate (){

    return(
        <>
          <Card style={{ width: '20rem', margin: '1rem'}}>
            <CalResult res = "12+2"/>
            <CalBody/>
          </Card>
        
      </>
    )

}