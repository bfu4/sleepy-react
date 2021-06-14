
export function Link(props: { url: string, classes?: string, content?: any }) {
    return (
        <a href={props.url} target="_blank" className={props.classes} rel="noreferrer">
            {props.content}
        </a>
    );
}
