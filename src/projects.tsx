export const project_list : Project[] = [
    { name: "sleeepy.ninja", description: "This site. In React.", url: ".", icon: "./favicon.ico" },
    {
        name: "meow",
        description: "Playful bot that sends cat pictures and crypto prices.",
        url: "https://top.gg/bot/832650363088797696",
        icon: "https://images.discordapp.net/avatars/832650363088797696/f6d2d23bfaee3cfc8475400df53da147.png"
    },
    { name: "cabbage", description: "Easy to use, simplistic, node-gyp wrapper.", url: "https://npmjs.org/cabbage-c"},
    { name: "BONK", description: "Easy library for setting up Spigot projects. Fast.", url:"https://github.com/bfu4/BONK" },
    {
        name: "edno",
        description: "Organization holding research materials for edno, the proof of concept, with the abstract defined as the url.",
        url: "https://github.com/ednoproject",
        icon: "https://avatars.githubusercontent.com/u/82788471?s=200&v=4"
    },
    {
        name: "sonare",
        description: "Under Construction. Reflective in-game Spigot-plugin debugger.",
        url: "https://github.com/bfu4/sonare",
        icon: "./sonare.png"
    },
    {
        name: "fruitcuptobitcoin",
        description: "Meme!",
        url: "https://fruitcuptobitcoin.xyz",
        icon: "https://fruitcuptobitcoin.xyz/cup.png"
    },
]

/**
 * Basic object type for a "`project`"
 */
export interface Project {

    name : string;
    url? : string;
    icon? : string;
    description? : string;

}

export function ProjectComponent(props : { project : Project }) {
    const el = props.project.icon ? iconFrom(props.project.icon!) : "";
    return (
        <div id="project" className="container-0-5">
            <div className="container-item project-icon margin-left-icon">{el}</div>
            <a
                className="container-0-5"
                href={ props.project.url ? props.project.url : "." }
                target="_blank"
                rel="noreferrer"
            >
                <div className="container-item container-0-5 max-200">
                    <div className="container-item project-name">{ props.project.name }</div>
                    <div className="container-item project-description"> { props.project.description }</div>
                </div>
            </a>
        </div>
    )
}

function iconFrom(url : string) {
    return (
        <img src={ url }
             alt=""
             className="project-icon"
             draggable="false"
        />
    )
}
