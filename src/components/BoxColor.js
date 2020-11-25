import React from 'react'



function BoxColor(props) {

    let r = props.r;
    let g = props.g;
    let b = props.b;

    let hexaValue = "";
    function rgbToHex(r, g, b) {
        hexaValue = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hexaValue;
      }

    return (
            <div className="thisBoxColor" style={{backgroundColor: `${rgbToHex(r, g, b)}`}}>
            <h5>{`rgb(${r},${g},${b})`} <br /> {`${hexaValue}`}</h5>
            </div>
        )
    }


export default BoxColor;

