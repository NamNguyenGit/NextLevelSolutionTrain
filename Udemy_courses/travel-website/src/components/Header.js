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
        </div>
    )
}
export default Header