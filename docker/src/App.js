import React, { Component } from 'react';
import { Impress, Step } from 'react-impressjs';
// Slides
import Main from './slides/01-Main';
import Outline from './slides/02-Outline';
import S03 from './slides/03-AppDeployment';
import S04 from './slides/04-Docker';
import S04n1 from './slides/04.1-Architecture';
import S05 from './slides/05-Why';
import S06 from './slides/06-Containers';
import S07 from './slides/07-Images';
import S08 from './slides/08-CLI Commands';
import S09 from './slides/09-Dockerfile';
import S10 from './slides/10-DockerCompose';
import Thanks from './slides/00-Thanks';
// Images

// Styles
// styles of react-impressjs
// import 'react-impressjs/styles/react-impressjs.css';
import 'react-impressjs/styles/impress-demo.css';

const titles = [
  {
    text: "Application Deployment",
  },
  {
    text: "Docker",
  },
  {
    text: "Docker: Terminology",
  },
  {
    text: "Containers",
  },
  {
    text: "Docker: Architecture",
  },
  {
    text: "Docker: Dockerfile",
  },
  {
    text: "Docker: Usage and/or Development Cycle",
  },
  {
    text: "Docker: docker-compose",
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Impress
          progress={true}
          fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>}
        >
          <Step id={'main'} className={'slide'} data={{ x: -2000, y: -1500 }}>
            <Main />
          </Step>
          <Step id={'outline'} className={'slide'} data={{ x: -1000, y: -1500 }}>
            <Outline titles={titles} />
          </Step>
          <Step id={'app-deployment'} className={'slide'} data={{ x: 0, y: -1500 }}>
            <S03 />
          </Step>
          <Step id={'docker'} className={'slide'} data={{ x: 1000, y: -1500 }}>
            <S04 />
          </Step>
          <Step id={'docker-architecture'} className={'slide'} data={{ x: 1000, y: -1200, z: -350, rotateX: -90 }}>
            <S04n1 />
          </Step>
          <Step id={'docker-contd'} className={'slide'} data={{ x: 2000, y: -1500 }}>
            <S05 />
          </Step>
          <Step id={'terminology-container'} className={'slide'} data={{ x: -2000, y: -750 }}>
            <S06 />
          </Step>
          <Step id={'terminology-images'} className={'slide'} data={{ x: -1000, y: -750 }}>
            <S07 />
          </Step>
          <Step id={'dockercli'} className={'slide'} data={{ x: 0, y: -750 }}>
            <S08 />
          </Step>
          <Step id={'dockerfile'} className={'slide'} data={{ x: 1000, y: -750 }}>
            <S09 />
          </Step>
          <Step id={'docker-compose'} className={'slide'} data={{ x: 2000, y: -750 }}>
            <S10 />
          </Step>
          <Step id={'thanks'} data={{ x: 2000, y: -750, z: -1000, "rotateX": 270, "rotateY": 45, scale: 1 }}>
            <Thanks />
          </Step>
          <Step id={'overview'} data={{ x: 0, y: 0, scale: 5 }} />
        </Impress>
      </div>
    );
  }
}

export default App;
