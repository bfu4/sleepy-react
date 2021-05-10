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
    SiAdobephotoshop
} from "react-icons/all";

const ICON_SIZE = 30;

const items = [
    {id: "java", content: <SiJava title="Java" size={ICON_SIZE} className="icon"/>},
    {id: "cpp", content: <SiCplusplus title="C++" size={ICON_SIZE} className="icon"/> },
    {id: "best-shell", content: <SiGnubash title="Bash" size={ICON_SIZE} className="icon"/>},
    {id: "node", content: <SiNodeDotJs title="Node.js" size={ICON_SIZE} className="icon"/>},
    {id: "hell", content: <SiV8 title="V8" size={ICON_SIZE} className="icon" />},
    {id: "best-text-editor", content: <SiVim title="vim" size={ICON_SIZE} className="icon" />},
    {id: "java-best-editor", content: <SiIntellijidea title="IntelliJ" size={ICON_SIZE} className="icon" />},
    {id: "maven", content: <SiApachemaven title="maven" size={ICON_SIZE} className="icon"/>},
    {id: "git1", content: <SiGithub title="Github" size={ICON_SIZE} className="icon" />},
    {id: "git2", content: <SiGitlab title="Gitlab" size={ICON_SIZE} className="icon" />},
    {id: "git3", content: <SiGit title="Git" size={ICON_SIZE} className="icon" />},
    {id: "ps", content: <SiAdobephotoshop title="Photoshop" size={ICON_SIZE} className="icon" />},
    {id: "sol", content: <img
            title="Solidity"
            src="https://raw.githubusercontent.com/bfu4/bfu4/master/sol.png"
            alt="sol"
            width={ICON_SIZE}
            height={ICON_SIZE}
        />},
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

const Element = (id: string, content: JSX.Element) => {
    return (
        <span id={id} style={{marginLeft: 0.2 + "em", marginRight: 0.2 + "em"}} >{content}</span>
    )
}