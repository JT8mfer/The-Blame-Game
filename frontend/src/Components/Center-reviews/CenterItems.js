const CenterItems = (props) => {
    return(
        <div>

            <div>
            <img alt="centerImage" src={props.centerimage} className="CenterImage" />
            </div>

            <div className="Reviews container"> 
            <h2>{props.name}</h2>
            <div className="date">{props.date}</div>
            <div className="description">{props.description}</div>
            </div>

        </div>
    );
}

export default CenterItems;