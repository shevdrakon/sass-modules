import React, {FunctionComponent} from "react";
import cn from "classnames";

import SearchIcon from "../Icons/SearchIcon";

import styles from "./SearchInput.module.scss";
import bemFactory from "../../lib/bemFactory";

const {block, element} = bemFactory("search-input", styles);

type Props = {
  className?: string;
  placeholder?: string;
};

const SearchInput: FunctionComponent<Props> = (props) => {
  const {className, placeholder} = props;
  const classes = cn(block(), className);

  return <div className={classes}>
    <SearchIcon className={element("icon")}/>
    <input className={element("input")} placeholder={placeholder}/>
  </div>
};

export default SearchInput;
