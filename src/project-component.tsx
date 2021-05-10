import { project_list, ProjectComponent } from "./projects";

export function ProjectsComponent() {
    let el: any = [];
    project_list.forEach((project) => {
        el.push(ProjectComponent({project}));
    })
    return (
        <div>
            { el }
        </div>
    );
}
