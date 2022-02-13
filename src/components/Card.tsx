import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  children?: ReactNode;
};

const Card = (props: Props) => {
  return (
    <section className={`card ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
