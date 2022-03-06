import React, { FC, ReactNode } from 'react';

interface Props  {
  className?: string;
};

const Card : FC<Props> = (props) => {
  return (
    <section className={`card ${props.className ? props.className : ''}`}>
      {props.children}
    </section>
  );
};

export default Card;
