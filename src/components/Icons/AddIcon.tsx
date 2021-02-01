import React, {FunctionComponent} from "react";

type Props = {
  className?: string;
};

const AddIcon: FunctionComponent<Props> = (props) => {
  const {className} = props;

  return <svg width="12" height="20" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
  </svg>
};

export default AddIcon;
