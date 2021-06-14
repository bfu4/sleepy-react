import "../css/bar.css"

import {Spotify} from "./spotify";

export function Sidebar() {
    return (
        <div className="base-container-item">
            <div className={"bar"} style={{width: "40%"}}>
                <div className={"bar-item"}>
                    eeeee
                </div>
                <div className={"bar-item"}>
                    <Spotify/>

                </div>
            </div>
        </div>
    )
}