import React, {FunctionComponent} from "react";

import AddIcon from "../Icons/AddIcon";

import styles from "./AddButton.module.scss";
import bemFactory from "../../lib/bemFactory";

const {block, element} = bemFactory("add-button", styles);

type Props = {
  variant?: "yellow" | "red"
};

const AddButton: FunctionComponent<Props> = (props) => {
  const {variant = "red"} = props;

  return <div className={block()}>
    <AddIcon className={element("icon", variant)}/>
    New
  </div>
}

export default AddButton;
