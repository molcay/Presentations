import React from 'react';
import Container from '../images/container.png';
import VM from '../images/vm.png';

export default () => {
  return (
    <>
      <q><b>Terminology: Containers</b></q>
      <hr />
      <div className="flex justify-center">
        <div className="flex flex-column mr2 items-center justify-center w-50">
          <img src={Container} alt="Container" />
          <span className="f4">Container</span>
        </div>
        <div className="flex flex-column mr2 items-center justify-center w-50">
          <img src={VM} alt="VM" />
          <span className="f4">VM</span>
        </div>
      </div>
      <ul className="f3">
        <li>Standard unit of software</li>
        <li>Includes an application, and its' requirements(e.g: libs, dependencies, etc.)</li>
        <li>Isolated (network, CPU, memory, etc.)</li>
      </ul>

    </>
  )
};
