import React from 'react';

import './card-list.style.css'
import Card from "../card/card.component";

const CardList = props => {
    return(
        <div className="card-list">
            {props.monsters.map((Monster) =>
                <Card Monster={Monster} key={Monster.id} />
            )}
        </div>
    )
}
export default CardList;