import React from 'react';



class ClickablePicture extends React.Component {
    state = {
        toggled: false,
        
    }

    handleClickChange = () => {
        this.setState({
            toggled: !this.state.toggled
        })
    };

    render () {
        let img = ""
        if (this.state.toggled) {img = this.props.imgClicked} else {img = this.props.img}

        return (
            <div>
                <img className="image-clickable" onClick={this.handleClickChange} src={img}/>
            </div>
        )
    }
}

export default ClickablePicture;