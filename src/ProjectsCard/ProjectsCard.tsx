import React from "react";

import Card, {CardTitle} from "../components/Card/Card";

import styles from "./ProjectsCard.module.scss";
import bemFactory from "../lib/bemFactory";
import AddButton from "../components/Buttons/AddButton";
import SearchInput from "../components/Inputs/SearchInput";
import ProjectsList from "./ProjectsList";

const {block, element} = bemFactory("projects-card", styles);

const generateCollaborators = () => {
  const source = [
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
  ];

  const count = Math.min(Math.max(Math.floor(Math.random() * source.length), 2), 6);

  return new Array(count).fill(null).map(() => {
    const index = Math.floor(Math.random() * source.length);

    return source[index];
  });
}

const projects = [
  {
    id: 1,
    name: "API Integration",
    group: "Engineering",
    collaborators: generateCollaborators(),
  },
  {
    id: 2,
    name: "New Benefits Plan",
    group: "Human resources",
    collaborators: generateCollaborators(),
  },
];


const ProjectsCard = () => {
  return <Card className={block()}>
    <CardTitle>
      <h2 className={element("title")}>
        Projects
      </h2>
      <AddButton/>
    </CardTitle>

    <SearchInput className={element("search-input")}
                 placeholder="Filter projects"/>
    <ProjectsList projects={projects}/>
  </Card>
};

export default ProjectsCard;
