import React from 'react';
import { AiOutlineMessage } from "react-icons/ai";

const CenterItems = (props) => {
    return(
        <div className="ReviewsContainer">

            <div className="ImageContainer">
            <img alt="centerImage" src={props.centerimage} className="CenterImage" />
            </div>

            <div className="DetailsContainer"> 
            <h2 className="titleReview">{props.name}</h2>
            <div className="date">{props.date}</div>
            <div className="description">{props.description}</div>
            <div className="commentIcon"><button className="commentButton"><AiOutlineMessage size="25px"/></button></div>
            </div>

        </div>
    );
}

export default CenterItems;