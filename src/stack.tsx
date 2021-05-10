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
    {id: "java", content: <SiJava size={ICON_SIZE} className="icon"/>},
    {id: "cpp", content: <SiCplusplus size={ICON_SIZE} className="icon"/> },
    {id: "best-shell", content: <SiGnubash size={ICON_SIZE} className="icon"/>},
    {id: "node", content: <SiNodeDotJs size={ICON_SIZE} className="icon"/>},
    {id: "hell", content: <SiV8 size={ICON_SIZE} className="icon" />},
    {id: "best-text-editor", content: <SiVim size={ICON_SIZE} className="icon" />},
    {id: "java-best-editor", content: <SiIntellijidea size={ICON_SIZE} className="icon" />},
    {id: "maven", content: <SiApachemaven size={ICON_SIZE} className="icon"/>},
    {id: "git1", content: <SiGithub size={ICON_SIZE} className="icon" />},
    {id: "git2", content: <SiGitlab size={ICON_SIZE} className="icon" />},
    {id: "git3", content: <SiGit size={ICON_SIZE} className="icon" />},
    {id: "ps", content: <SiAdobephotoshop size={ICON_SIZE} className="icon" />},
    {id: "sol", content: <img
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