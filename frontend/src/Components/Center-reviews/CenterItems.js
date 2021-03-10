const CenterItem = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <div className="date">{props.date}</div>
            <div className="description">{props.description}</div>
        </div>
    );
}

export default CenterItem;