import React, {FunctionComponent} from "react";
import cn from "classnames";

import styles from "./TwCard.module.scss";
import bemFactory from "../../../lib/bemFactory";

const {block, element} = bemFactory("tw-card", styles);

type Props = {
  className?: string;
};

const TwCard: FunctionComponent<Props> & { Title: typeof TwCardTitle } = (props) => {
  const {children, className} = props;

  // @ts-ignore
  const header = React.Children.toArray(children).find(x => x.type === TwCardTitle);
  // @ts-ignore
  const child = React.Children.toArray(children).filter(x => x.type !== TwCardTitle);

  const classes = cn(block(), className);

  return <div className={classes}>
    <section className={element("content")}>
      {header}
      {child}
    </section>
  </div>
};

export const TwCardTitle: FunctionComponent = (props) => {
  const {children} = props;

  return <header className={element("title")}>
    {children}
  </header>;
}

TwCard.Title = TwCardTitle;

export default TwCard;
