import React, {FunctionComponent} from "react";

import AddIcon from "../../Icons/AddIcon";

import styles from "./TwAddButton.module.scss";
import bemFactory from "../../../lib/bemFactory";

const {block, element} = bemFactory("tw-add-button", styles);

type Props = {
  variant?: "yellow" | "red"
};

const TwAddButton: FunctionComponent<Props> = (props) => {
  const {variant = "red"} = props;

  return <div className={block()}>
    <AddIcon className={element("icon", variant)}/>
    New
  </div>
}

export default TwAddButton;
