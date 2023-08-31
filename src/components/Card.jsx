import React from "react";
import './Card.css';
import image from '../images/katie-zaferes.png'
import star from '../images/star.png'

function Card(props) {
    const info = props;

    let badgeText
    if (info.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (info.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${info.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{info.stats.rating}</span>
                <span className="gray">({info.stats.reviewCount}) • </span>
                <span className="gray">{info.location}</span>
            </div>
            <p className="card--title">{info.title}</p>
            <p className="card--price"><span className="bold price">From ${info.price} </span>/ person</p>
        </div>
    )
}

export default Card;