import React from 'react';
import CenterItem from './CenterItems';
import "./Center.css";
import diceydungeons from "./Images/diceydungeons.jpg";
import supermario from "./Images/supermario.jpg";
import omori from "./Images/omori.jpg";
import grindstone from "./Images/grindstone.jpeg";
import breathedge from "./Images/breathedge.jpg";

class Center extends React.Component {
    state = {
        centerItems:[
            {id:1, name:"Super Mario 3D World", date:"March 8, 2021", description:"The cat's out of the bag, Super Mario 3D World is on to the Nintendo Switch system. Pounce and climb through dozens of colorful stages! Mario (and his friends) can use power-ups like the Super Bell, which grants catlike abilities, like climbing and scratching. Work together locally or online with up to three other players to reach the goaland to see who can get a high score. The Super Mario 3D World + Bowser's Fury game features the same great co-op gameplay, creative levels and power-ups as the original game, but also so much more.", centerimage:supermario}, 
            {id:2, name:"Dicey Dungeons", date:"February 12, 2021", description:"Become a giant walking dice and battle to the end of an ever-changing dungeon! Can you escape the cruel whims of Lady Luck? In this new fast-paced deckbuilding roguelike from Terry Cavanagh, Chipzel, and Marlowe Dobbe, you'll fight monsters, find better loot, and level up your heroes as you work together to take down the Goddess of Fortune, Lady Luck herself. Balance your carefully planned strategies against the unknown of a dice roll. Play as six different characters, each with their own unique play styles and abilities. Master each class and figure out which one best fits your style in this charming world filled with a growing array of twists and secrets.", centerimage:diceydungeons},
            {id:3, name:"Breathedge", date:"January 28, 2021",description:"Trapping you in a vast field of space wreckage with nothing more than an immortal chicken for company, Breathedge is a survival-adventure game with an undeniably novel setup. Instead of punching trees, you'll navigate a three-dimensional, zero-gravity environment in order to snag supplies, craft tools, and avoid suffocation, all while trying to uncover the twisting plot behind the crash of the largest space liner in history – which happened with you on it. Despite the fresh setting, you'll only get a taste of some rudimentary survival gameplay before a scripted story takes over and drives you out of the survival mechanics entirely. The sense that another wondrous discovery is just around the corner is what drives these games... and Breathedge doesn't have it.", centerimage:breathedge},
            {id:4, name:"Grindstone", date:"January 12, 2021", description:"Smash creeps to get huge combos and earn precious Grindstones in CAPY’s hit puzzle-battler. Cash in your grindstones to craft new gear and overcome devious enemies, obstacles, and boss encounters as you conquer Grindstone Mountain’s 200+ levels, and prove your prowess on the daily mode’s leaderboards.", centerimage:grindstone},
            {id:5, name:"Omori", date:"December 27, 2020", description:"Explore a strange world full of colorful friends and foes. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.", centerimage:omori}
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