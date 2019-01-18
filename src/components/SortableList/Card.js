import React, { Component } from 'react';

const Card = props => {
  const style = props.isDragging
    ? `card text-white border-light text-light`
    : `card text-${ props.color }`;

  return props.connectDropTarget(
    <article className="pt-1 pb-1">
      { props.connectDragSource(
          <div className={style}>
            <div className="card-body">
              <h5>{props.title}</h5>
            </div>
          </div>
      ) }
    </article>
  );
}

export default Card;
