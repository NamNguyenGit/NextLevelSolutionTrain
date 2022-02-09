import { useState } from "react"
const Header = () => {
    const [state] = useState({
        video:'/assets/videos/header.mp4',
        poster:"/assets/images/screen.png"
    }) 
    return(
        <div className="header">
            <div className="header__video">
                <video className="header__video__detail" src={state.video} autoPlay loop muted poster={state.poster}></video>
            </div>
            <div className="header__contents">
                <div className="container">
                    <div className="header__contents__text">
                        <div className="header__contents__text__child">
                            <h1 className="header__contents__text__child__h1">
                                We are travel friends
                            </h1>
                            <p className="header__contents__text__child__p">
                                Come and join us we travel the most famous and beautiful places in the world.
                            </p>
                            <div className="header__contents__text__child__link">
                                <button>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header