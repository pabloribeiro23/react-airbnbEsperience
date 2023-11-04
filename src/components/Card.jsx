function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return(
        <div className='card'>
            {badgeText && <span className="card--badge">{badgeText}</span>}
            <img src={`../src/assets/${props.coverImg}`} alt="card image" className='card--image'/>
            <div className='card--status'>
                <img src="src/assets/star.png" alt="star" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}
export default Card;