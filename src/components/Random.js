import React from 'react'


function Random(props) {

    let randomValue;
    let min = props.min;
    let max = props.max;

    function randomInteger(min, max) {
        randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue
    }

    return (
            <div className="greeting-cards">  
               <h6> {`Random value between ${min} and ${max} => ${randomInteger(min, max)}`}</h6>
            </div>
        )
    }


export default Random;

