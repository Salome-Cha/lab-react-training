import React from 'react'
import Rating from './Rating'
import './DriverCard.css';

function DriverCard(props) {

    return (
        <div className="driver-card-wrapper">
            <div className="driver-card">
                <div className= "card-global-content">
              <div> <img className='pilotImage' src={props.img}/> </div>
                <div class="content-card">
                    <h2>{props.name}</h2>
    <Rating>{props.rating}</Rating>
                    <p>{props.car.model} - {props.car.licensePlate}</p>
                </div>
                </div>
            </div>
            </div>
        )
    }


export default DriverCard;

