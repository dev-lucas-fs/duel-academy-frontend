




export default function ObtainInfo(booster: { img: string, name: string, unlock: string }) {

    return (
        <div  className="obtain-info">
            <div className="obtain-info__img">
                <img src={booster.img} alt="" />
                <div className="obtain-info__mask"></div>
            </div>
            <h1>{ booster.name }</h1>
            <div className="unlock-container">
                <h2>Unlock:</h2>
                <p>{ booster.unlock }</p>
            </div>
        </div>
    )
}