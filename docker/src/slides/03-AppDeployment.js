import React from 'react';
import BareMetal from '../images/bare-metal-architecture.png';
import VM from '../images/vm-architecture.png';

export default () => {
  return (
    <>
      <q><b>Application Deployment</b></q>
      <hr />
      <div className="flex justify-between">
        <div className="flex flex-column mr2 items-center justify-center w-50">
          <img src={BareMetal} alt="Bare Metal Architecture" />
          <span className="f4">Bare-Metal Architecture</span>
        </div>
        <div className="flex flex-column mr2 items-center justify-center w-50">
          <img src={VM} alt="VM Architecture" />
          <span className="f4">VM Architecture</span>
        </div>
      </div>
    </>
  )
};
