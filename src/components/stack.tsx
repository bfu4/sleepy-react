// Stealing icons from ali again
import {
    SiJava,
    SiCplusplus,
    SiApachemaven,
    SiGnubash,
    SiNodeDotJs,
    SiV8,
    SiVim,
    SiGithub,
    SiGitlab,
    SiGit,
    SiIntellijidea,
    SiAdobephotoshop,
    SiGo
} from "react-icons/all";

const ICON_SIZE = 30;

type Item = { id: string, key: string, content: JSX.Element | JSX.IntrinsicElements }

const makeItem = (id: string, content: JSX.Element | JSX.IntrinsicElements): Item => {
    return {id: id, key: id, content: content};
}

const java = makeItem("java", <SiJava title="Java" size={ICON_SIZE} className="icon"/>);
const cpp = makeItem("cpp", <SiCplusplus title="C++" size={ICON_SIZE} className="icon"/>);
const bash = makeItem("bash", <SiGnubash title="Bash" size={ICON_SIZE} className="icon"/>)
const node = makeItem("node", <SiNodeDotJs title="Node.js" size={ICON_SIZE} className="icon"/>);
const v8 = makeItem("v8", <SiV8 title="V8" size={ICON_SIZE} className="icon"/>);
const vim = makeItem("vim", <SiVim title="vim" size={ICON_SIZE} className="icon"/>);
const intellij = makeItem("intellij", <SiIntellijidea title="IntelliJ" size={ICON_SIZE} className="icon"/>);
const maven = makeItem("maven", <SiApachemaven title="maven" size={ICON_SIZE} className="icon"/>);
const github = makeItem("github", <SiGithub title="Github" size={ICON_SIZE} className="icon"/>);
const gitlab = makeItem("gitlab", <SiGitlab title="Gitlab" size={ICON_SIZE} className="icon"/>);
const git = makeItem("git", <SiGit title="Git" size={ICON_SIZE} className="icon"/>);
const photoshop = makeItem("photoshop", <SiAdobephotoshop title="Photoshop" size={ICON_SIZE} className="icon"/>);
const solidity = makeItem("solidity", <img
    title="Solidity"
    src="https://raw.githubusercontent.com/bfu4/bfu4/master/sol.png"
    alt="sol"
    width={ICON_SIZE}
    height={ICON_SIZE}
/>);
const go = makeItem("golang", <SiGo title="Golang" size={ICON_SIZE} className="icon"/>);


const items = [
    java, cpp, bash, node, v8, vim, intellij, maven, github, gitlab, git, photoshop, solidity, go
];

export const Stack = () => {
    return (
        <div className="container-0-5">
            {items.map((item) => {
                return Element(item.id, item.content);
            })}
        </div>
    );
};

const Element = (id: string, content: JSX.Element | JSX.IntrinsicElements) => {
    return (
        <span id={id} key={id} style={{marginLeft: 0.2 + "em", marginRight: 0.2 + "em"}}>{content}</span>
    )
}