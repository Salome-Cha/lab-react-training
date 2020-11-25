import React from 'react'
import './Greeting.css';

function Greeting(props) {

    let greeting = "";

    switch (props.lang) {
    
        case "de":
            greeting = "Hallo";
            break;
        case "en":
            greeting = "Hello";
            break;
        case "es":
            greeting = "Ola";
            break;
        case "fr":
            greeting = "Bonjour";
            break;
        }


        return (
            <div className="greeting-cards">
               <h3> {greeting} {props.children} </h3>
            </div>
        )
    }


export default Greeting;

