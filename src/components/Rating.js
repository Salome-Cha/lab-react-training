import React from 'react'




function Rating(props) {

    let rating = props.children;
    let roundRatingValue = Math.round(rating).toString();
    let stars = "";



    switch (roundRatingValue) {
        case '0':
            stars = '☆☆☆☆☆';
            break;
        case '1':
            stars = '★☆☆☆☆';
            break;
        case '2':
            stars = '★★☆☆☆';
            break;
        case '3':
            stars = '★★★☆☆';
            break;
        case '4':
            stars = '★★★★☆';
            break;
        case '5':
            stars = '★★★★★';
            break;
        }



    return (
            <div className="rating-component">
               <h6> {stars} </h6>
            </div>
        )
    }


export default Rating;

