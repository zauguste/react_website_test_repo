import profile from './assets/profile.png'
// build your compoment
function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={profile} alt="profile picture"></img>
            <h2>Bro Code</h2>
            <p>I make Youtube videos games</p>
        </div>
    );
}

export default Card