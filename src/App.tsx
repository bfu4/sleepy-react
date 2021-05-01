import React from 'react';
import './App.css';

// Good icons, thanks @alii
import { GitHub, Linkedin, Twitter, Mail } from "react-feather";

import { Link } from "./Link";
import { ProjectsComponent } from "./ProjectComponent";

export default function App() {
    return (
        <div className="base">
            <div className="container-0-5">
                <div className="container-item title">Bella Fusari</div>
                <div className="container-item subtitle">@bfu4</div>
            </div>
            <div className="container-0-5 centered">
                <Link url="https://linkedin.com/in/bella-fusari" classes="icon container-item" content={<Linkedin/>}/>
                <Link url="https://github.com/bfu4" classes="icon container-item" content={<GitHub/>}/>
                <Link url="https://twitter.com/bellafusari1" classes="icon container-item" content={<Twitter/>}/>
                <Link url="mailto:bella@localhost22.com" classes="icon container-item" content={<Mail/>}/>
            </div>
            <ProjectsComponent/>
        </div>
    );
}

