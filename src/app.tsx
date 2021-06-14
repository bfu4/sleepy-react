import React from 'react';
import './css/app.css';

// Good icons, thanks @alii
import {GitHub, Linkedin, Twitter, Mail} from "react-feather";

import {Link} from "./components/link";
import {Stack} from "./components/stack";
import {Sidebar} from "./components/sidebar";

export default function App() {
    return (
        <div className="base-container">
            <div className="base base-container-item">
                <div className="container-0-5">
                    <div className="container-item title">Bella Fusari</div>
                    <div className="container-item subtitle">@bfu4</div>
                    <div id="spotify" className="container-item"/>
                </div>
                <Stack/>
                <div style={{marginTop: 2 + "em", marginBottom: 2 + "em"}}>
                    <div className="container-0-5" id="links">
                        <div className="container-item" style={{fontSize: 20 + "px"}}>
                            Links <a href="#links" className="icon tagline"> # </a>
                        </div>
                    </div>
                    <div className="container-0-5">
                        <Link url="https://linkedin.com/in/bella-fusari" key="linkedin" classes="icon container-item"
                              content={<Linkedin size={30}/>}/>
                        <Link url="https://github.com/bfu4" key="github" classes="icon container-item"
                              content={<GitHub size={30}/>}/>
                        <Link url="https://twitter.com/bellafusari1" key="twitter" classes="icon container-item"
                              content={<Twitter size={30}/>}/>
                        <Link url="mailto:bella@localhost22.com" key="mail" classes="icon container-item"
                              content={<Mail size={30}/>}/>
                    </div>
                </div>
            </div>
            <Sidebar/>
        </div>
    );
}

