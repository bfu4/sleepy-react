export const project_list : Project[] = [
    { name: "Test", description: "This site. In React.", url: ".", icon: "./favicon.ico" },
    { name: "Meow", description: "Ok" }
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
                <div className="container-item container-0-5 max-200 fit">
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
