import React from 'react';

export default ({ titles }) => {
  return (
    <>
      <q><b>Outline</b></q>
      <hr />
      <ul>
        {
          titles.map(title => (
            <li className={(title.isCompleted ? 'completed' : '')} key={title.text}>{title.text}</li>
          ))
        }
      </ul>
    </>
  )
};
