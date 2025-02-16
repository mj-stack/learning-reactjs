import profilePic from "./assets/IMG_4461.jpg";

function Card() {
    return(
        <div className="card">
            <img className="profilePic" src={profilePic} alt="Profile Picture"/>
            <h2 className="card-title">Mukul Joshi</h2>
            <p className="card-text">I make YouTube Videos and play Video Games</p>
        </div>
    );
}

export default Card;