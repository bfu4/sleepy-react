import React from 'react';
import './app.css';

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
        ReactDOM.render(<Spotify songData={ song }/>, sid);
    });
    return (
        <div className="base">
            <div className="container-0-5">
                <div className="container-item title">Bella Fusari</div>
                <div className="container-item subtitle">@bfu4</div>
                <div id="spotify" className="container-item"></div>
            </div>
            <div className="container-0-5">
                <Link url="https://linkedin.com/in/bella-fusari" classes="icon container-item" content={ <Linkedin size={30}/> }/>
                <Link url="https://github.com/bfu4" classes="icon container-item" content={ <GitHub size={30}/> }/>
                <Link url="https://twitter.com/bellafusari1" classes="icon container-item" content={ <Twitter size={30}/> }/>
                <Link url="mailto:bella@localhost22.com" classes="icon container-item" content={ <Mail size={30}/> }/>
            </div>
            <ProjectsComponent/>
        </div>
    );
}

