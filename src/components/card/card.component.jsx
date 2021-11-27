import React from 'react';

import './card.style.css';

const Card = (props) => {
    return(
        <div className={'card-container'}>
            <img src={`https://robohash.org/${props.Monster.id}?set=set2&size=180x180`} alt=""/>
            <h2>{props.Monster.name}</h2>
            <p>{props.Monster.email}</p>
        </div>
    )
}
export default Card;