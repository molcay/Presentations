import React from 'react';
import DockerArch from '../images/docker-daemon.png';

export default () => {
  return (
    <>
      <q><b>Docker: Architecture</b></q>
      <hr />
      <div className="flex justify-center">
        <div className="flex flex-column mr2 items-center justify-center w-40">
          <img src={DockerArch} alt="Docker Daemon" />
          <span className="f4">Docker Daemon (Docker Engine)</span>
        </div>
      </div>
      <ul className="f3">
        <li>MacOS/Windows on Host Machine: Hypervisior(VMM) over TCP</li>
        <div className="flex justify-center f4">
          <span className="bg-near-white">HyperKit (MacOS), HyperV (Windows)</span>
        </div>
        <li>Linux on Host Machine: Host's Kernel over Unix Socket</li>
      </ul>
    </>
  )
};
