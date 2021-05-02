import React from 'react';
import './App.css';

// Good icons, thanks @alii
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";

import { Link } from "./Link";
import { ProjectsComponent } from "./ProjectComponent";
import { getSong, Spotify } from "./spotify";
import ReactDOM from 'react-dom';

export default function App() {
    getSong().then((song) => {
        const sid = document.getElementById("spotify");
        if (song === null || song === undefined) {
            ReactDOM.render(<div>Not listening to anything.</div>, sid);
            return;
        }
        const songData = {
            name: song.name,
            artist: song.artists[0].name,
            album: song.album.name,
            icon: song.album.images[0].url,
            url: song.external_urls.spotify
        };
        ReactDOM.render(<Spotify songData={ songData }/>, sid);
    });
    return (
        <div className="base">
            <div className="container-0-5">
                <div className="container-item title">Bella Fusari</div>
                <div className="container-item subtitle">@bfu4</div>
                <div id="spotify" className="container-item"></div>
            </div>
            <div className="container-0-5 centered">
                <Link url="https://linkedin.com/in/bella-fusari" classes="icon container-item" content={ <Linkedin/> }/>
                <Link url="https://github.com/bfu4" classes="icon container-item" content={ <GitHub/> }/>
                <Link url="https://twitter.com/bellafusari1" classes="icon container-item" content={ <Twitter/> }/>
                <Link url="mailto:bella@localhost22.com" classes="icon container-item" content={ <Mail/> }/>
            </div>
            <ProjectsComponent/>
        </div>
    );
}

