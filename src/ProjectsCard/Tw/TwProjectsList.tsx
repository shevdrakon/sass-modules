import React, {FunctionComponent} from "react";

import TwProjectDescription from "../Items/Tw/TwProjectDescription";

import styles from "./TwProjectsList.module.scss";
import bemFactory from "../../lib/bemFactory";

const {block, element} = bemFactory("tw-projects-list", styles);

type Props = {
  projects: Array<{
    id: number;
    name: string;
    group: string;
    collaborators: Array<string>;
  }>;
};

const TwProjectsList: FunctionComponent<Props> = (props) => {
  const {projects} = props;

  return <ul className={block()}>
    {
      projects.map(x => {
        return <li key={x.id} className={element("item")}>
          <TwProjectDescription project={x}/>
        </li>
      })
    }
    <li className={element("new-project-item")}>
      <div className={element("new-project")}>New Project</div>
    </li>
  </ul>
};

export default TwProjectsList;
