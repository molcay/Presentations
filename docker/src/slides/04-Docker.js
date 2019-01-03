import React from 'react';
import VM from '../images/vm-architecture.png';
import Docker from '../images/docker-architecture.png';

export default () => {
  return (
    <>
      <q><b>Docker</b></q>
      <hr />
      <div className="flex justify-center">
        <div className="flex flex-column mr2 items-center justify-center w-40">
          <img src={VM} alt="VM Architecture" />
          <span className="f3">VM Architecture</span>
        </div>
        <div className="flex flex-column mr2 items-center justify-center w-60">
          <img src={Docker} alt="Docker Architecture" />
          <span className="f3">Docker Architecture</span>
        </div>
      </div>
    </>
  )
};
