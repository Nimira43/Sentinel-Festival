import cubeImage from '../assets/images/cube.png';

function Intro() {
  return (
    <div id="intro">
      <div id="title">
        Transcube<span style={{ backgroundImage: `url(${cubeImage})` }}>React</span>
      </div>
      <div id="slug">
        <p>a game by <a href="https://github.com/jeroenverfallie">jeroen verfallie</a></p>
        <p>adapted by <a href='https://github.com/Nimira43'>nimiratech</a></p>
      </div>
      <div id="play" className="button">Play</div>
      <div id="github" className="button">Github</div>
    </div>
  );
}

export default Intro;
