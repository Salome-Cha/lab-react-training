import React from 'react'
import './IdCard.css';

class IdCard extends React.Component {
    
    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        gender: this.props.gender,
        height: this.props.height,
        birth: this.props.birth,
        picture: this.props.picture,
    }

    render () {
        return (
            <div class='id-card-wrapper'>
                <div><img  className='IdImage' src={this.state.picture} /> </div>
                <div class="id-content">
                    <ul>
                <li> <strong>First Name: </strong> {this.state.firstName} </li> 
                <li> <strong>Last Name: </strong> {this.state.lastName} </li> 
                <li> <strong>Gender: </strong> {this.state.gender} </li> 
                <li> <strong>Height: </strong> {this.state.height} </li> 
                <li> <strong>Birth: </strong> {this.state.birth.toString()} </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default IdCard;

