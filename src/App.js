import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Alert from 'react-bootstrap/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TEXT = 'Happy Birthday 9.11';

const App = () => {
  const canvasRef = React.useRef(null)

  React.useEffect(() => {
    const canvasDivElement = canvasRef.current;

    // NOTE: If you change TEXT value to something else, you'll need to make changes in sketch.js as well to make it work
    // See my comments in sketch.js
    new p5(sketch(canvasDivElement, TEXT), canvasDivElement);
  })

  return (
    <div>
      <div className="main">
          <div ref={canvasRef} />
      </div >
      <div>
        <h1>
        <Alert key='secondary' variant='secondary'>
          Nguyễn Thị Phương Anh
        </Alert>
        </h1>
        <div className = "img1">
          <img src="phuong-anhn.jpg" alt="Phuong-Anh"></img>
        </div>
        <div className="img3">
        <img className="img3" src="phuonganh-3.jpg" alt="Phuong-Anh"></img>
        </div>
        <div className="img2">
        <img className="img2" src="phuonganh-2.jpg" alt="Phuong-Anh"></img>
        </div>
      </div >
    </div>
  )
}

export default App;
