import React, { Component } from 'react';
import { Impress, Step } from 'react-impressjs';
// Slides
import Main from './slides/01-Main';
import Outline from './slides/02-Outline';
import S03 from './slides/03';
import S04 from './slides/04';
import S05 from './slides/05';
import S06 from './slides/06';
import S07 from './slides/07';
import Thanks from './slides/00-Thanks';
// Styles
// styles of react-impressjs
// import 'react-impressjs/styles/react-impressjs.css';
import 'react-impressjs/styles/impress-demo.css';

const titles = [
  {
    text: "What is Container(s)?",
    isCompleted: true
  },
  {
    text: "Why we need Container(s)?",
    isCompleted: false
  },
  {
    text: "What is Docker?",
    isCompleted: false
  },
  {
    text: "Docker: Architecture",
    isCompleted: false
  },
  {
    text: "Docker: Dockerfile",
    isCompleted: false
  },
  {
    text: "Docker: Usage and/or Development Cycle",
    isCompleted: false
  },
  {
    text: "Docker: docker-compose",
    isCompleted: false
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
          <Step id={'main'} className={'slide'} data={{ x: -1000, y: -1500 }}>
            <Main />
          </Step>
          <Step id={'outline'} className={'slide'} data={{ x: 0, y: -1500 }}>
            <Outline titles={titles} />
          </Step>
          <Step id={'s03'} className={'slide'} data={{ x: 1000, y: -1500 }}>
            <S03 />
          </Step>
          <Step id={'s04'} className={'slide'} data={{ x: 2000, y: -1500 }}>
            <S04 />
          </Step>
          <Step id={'s05'} className={'slide'} data={{ x: 3000, y: -1500 }}>
            <S05 />
          </Step>
          <Step id={'s06'} className={'slide'} data={{ x: -1000, y: -750 }}>
            <S06 />
          </Step>
          <Step id={'s07'} className={'slide'} data={{ x: 0, y: -750 }}>
            <S07 />
          </Step>
          <Step id={'thanks'} data={{ x: 3000, y: -750, z: -1000, "rotateX": 270, "rotateY": 45, scale: 1 }}>
            <Thanks />
          </Step>
          <Step id={'overview'} data={{ x: 1000, y: 0, scale: 5 }} />
        </Impress>
      </div>
    );
  }
}

export default App;
