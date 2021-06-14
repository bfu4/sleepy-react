import React from 'react';
import './app.css';

// Good icons, thanks @alii
import {GitHub, Linkedin, Twitter, Mail} from "react-feather";

import {Link} from "./Link";
import {ProjectsComponent} from "./project-component";
import {Spotify} from "./spotify";
import {Stack} from "./stack";

export default function App() {
    return (
        <div className="base">
            <div className="container-0-5">
                <div className="container-item title">Bella Fusari</div>
                <div className="container-item subtitle">@bfu4</div>
                <Spotify/>
            </div>
            <Stack/>
            <div style={{marginTop: 2 + "em", marginBottom: 2 + "em"}}>
                <div className="container-0-5" id="links">
                    <div className="container-item" style={{fontSize: 20 + "px"}}>
                        Links <a href="#links" className="icon tagline"> # </a>
                    </div>
                </div>
                <div className="container-0-5">
                    <Link url="https://linkedin.com/in/bella-fusari" classes="icon container-item"
                          content={<Linkedin size={30}/>}/>
                    <Link url="https://github.com/bfu4" classes="icon container-item" content={<GitHub size={30}/>}/>
                    <Link url="https://twitter.com/bellafusari1" classes="icon container-item"
                          content={<Twitter size={30}/>}/>
                    <Link url="mailto:bella@localhost22.com" classes="icon container-item" content={<Mail size={30}/>}/>
                </div>
            </div>
            <div style={{marginTop: 2 + "em", marginBottom: 2 + "em"}}>
                <div className="container-0-5" id="projects">
                    <div className="container-item" style={{fontSize: 20 + "px"}}>
                        Projects <a href="#projects" className="icon tagline"> # </a>
                    </div>
                </div>
                <ProjectsComponent/>
            </div>
        </div>
    );
}

