import React, {FunctionComponent} from "react";

import ProjectDescription from "./Items/ProjectDescription";

import styles from "./ProjectsList.module.scss";
import bemFactory from "../lib/bemFactory";

const {block, element} = bemFactory("projects-list", styles);

type Props = {
  projects: Array<{
    id: number;
    name: string;
    group: string;
    collaborators: Array<string>;
  }>;
};

const ProjectsList: FunctionComponent<Props> = (props) => {
  const {projects} = props;

  return <ul className={block()}>
    {
      projects.map(x => {
        return <li key={x.id} className={element("item")}>
          <ProjectDescription project={x}/>
        </li>
      })
    }
    <li className={element("new-project-item")}>
      <div className={element("new-project")}>New Project</div>
    </li>
  </ul>
};

export default ProjectsList;
