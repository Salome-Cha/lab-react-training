import React from 'react'
import './CreditCard.css';




function CreditCard(props) {

    let cardNumber = props.number.replace(/.(?=.{4})/g, 'x');
    let shortExpirationYear = props.expirationYear.toString().substr(-2);

    let type = props.type;
    function logoRender(type) {
    if(type === "Master Card") {
        return <img src="../img/master-card.svg" className="cb-logo"/>
    } else { 
        return <img src="../img/visa.png" className="cb-logo"/>}
    }


        return (
            <div className="credit-cards" style={{backgroundColor: `${props.bgcolor}`}}>
             
            <div> {logoRender(type)}</div>
               <h6> {props.type} </h6>
               <h3> {cardNumber} </h3>
               <h6> {`Expires: ${props.expirationMonth}/${shortExpirationYear} ${props.bank}`} </h6>

               <h5> {props.owner} </h5>

            </div>
        )
    }


export default CreditCard;


