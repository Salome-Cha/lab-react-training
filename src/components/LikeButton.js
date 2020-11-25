import React from 'react';
import './LikeButton.css';



class LikeButton extends React.Component {
    state = {
        count: 0,  
    }

    handleIncrementClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    };

    render () {
        let colorsArray = ['purple','blue','green','yellow','orange','red']
        let randomColor = colorsArray[Math.floor(Math.random()*colorsArray.length)];

        return (
            <div>
                <button className="button-like" onClick={this.handleIncrementClick} style={{backgroundColor: randomColor}}> Likes: {this.state.count} </button>
            </div>
        )
    }
}

export default LikeButton;