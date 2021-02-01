import React, {FunctionComponent} from "react";

import styles from "./TwProjectDescription.module.scss";
import bemFactory from "../../../lib/bemFactory";

const {block, element} = bemFactory("tw-project-description", styles);

type Props = {
  project: {
    name: string;
    group: string;
    collaborators: Array<string>;
  }
};

const TwProjectDescription: FunctionComponent<Props> = (props) => {
  const {project: {name, group, collaborators}} = props;

  return <div className={block()}>
    <dl className={element("details")}>
      <dd className={element("name")}>
        {name}
      </dd>
      <dd className={element("group")}>
        {group}
      </dd>
      <div className={element("collaborators")}>
        <dd className={element("avatars")}>
          {
            collaborators.map((src, index) => {
              return <img key={index} src={src} className={element("avatar-image")} alt="avatar"/>
            })
          }
        </dd>
      </div>
    </dl>
  </div>
};

export default TwProjectDescription;
