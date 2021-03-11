import React from 'react';
import CenterItem from './CenterItems';
import "./Center.css";
import diceydungeons from "./Images/diceydungeons.jpg";
import supermario from "./Images/supermario.jpg";
import omori from "./Images/omori.jpg";

class Center extends React.Component {
    state = {
        centerItems:[
            {id:1, name:"Super Mario 3D World", date:"March 8, 2021", description:"The cat's out of the bag, Super Mario 3D World is on to the Nintendo Switch system. Pounce and climb through dozens of colorful stages! Mario (and his friends) can use power-ups like the Super Bell, which grants catlike abilities, like climbing and scratching. Work together locally or online with up to three other players to reach the goaland to see who can get a high score. The Super Mario 3D World + Bowser's Fury game features the same great co-op gameplay, creative levels and power-ups as the original game, but also so much more.", centerimage:supermario}, 
            {id:2, name:"Dicey Dungeons", date:"February 12, 2021", description:"Become a giant walking dice and battle to the end of an ever-changing dungeon! Can you escape the cruel whims of Lady Luck? In this new fast-paced deckbuilding roguelike from Terry Cavanagh, Chipzel, and Marlowe Dobbe, you'll fight monsters, find better loot, and level up your heroes as you work together to take down the Goddess of Fortune, Lady Luck herself. Balance your carefully planned strategies against the unknown of a dice roll. Play as six different characters, each with their own unique play styles and abilities. Master each class and figure out which one best fits your style in this charming world filled with a growing array of twists and secrets.", centerimage:diceydungeons},
            {id:3, name:"Omori", date:"January 28, 2021", description:"Explore a strange world full of colorful friends and foes. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.", centerimage:omori}
         ]
    }
    render() {
        const eachCenterItem = this.state.centerItems.map((centerItem) => {
            return <CenterItem key = {centerItem.id} name = {centerItem.name} date = {centerItem.date} description = {centerItem.description} centerimage = {centerItem.centerimage}/>
        })
    return (
        <div>
            <div className="containerReview">
                {eachCenterItem}
                 
            </div>
            
        </div>
    );
}
}

export default Center;