import React from 'react';
import CenterItem from './CenterItems';
import "./Center.css";

class Center extends React.Component {
    state = {
        centerItems:[
            {id:1, name:"Game1", date:"Date", description:"Descr"},
            {id:2, name:"Game2", date:"Date2", description:"Descr2"},
            {id:3, name:"Game3", date:"Date3", description:"Descr3"}
        ]
    }
    render() {
        const eachCenterItem = this.state.centerItems.map((centerItem) => {
            return <CenterItem key = {centerItem.id} name = {centerItem.name} date = {centerItem.date} description = {centerItem.description}/>
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