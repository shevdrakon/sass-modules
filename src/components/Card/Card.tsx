import React, {FunctionComponent} from "react";
import cn from "classnames";

import styles from "./Card.module.scss";
import bemFactory from "../../lib/bemFactory";

const {block, element} = bemFactory("card", styles);

type Props = {
  className?: string;
};

const Card: FunctionComponent<Props> & { Title: typeof CardTitle } = (props) => {
  const {children, className} = props;

  // @ts-ignore
  const header = React.Children.toArray(children).find(x => x.type === CardTitle);
  // @ts-ignore
  const child = React.Children.toArray(children).filter(x => x.type !== CardTitle);

  const classes = cn(block(), className);

  return <div className={classes}>
    <section className={element("content")}>
      {header}
      {child}
    </section>
  </div>
};

export const CardTitle: FunctionComponent = (props) => {
  const {children} = props;

  return <header className={element("title")}>
    {children}
  </header>;
}

Card.Title = CardTitle;

export default Card;
