import React from 'react';
import './App.css';
import sketch from './sketch';
import p5 from 'p5';
import Alert from 'react-bootstrap/Alert';
import  './index.css';
import './App.css';


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
          <img src="https://firebasestorage.googleapis.com/v0/b/voice-project-f2a8b.appspot.com/o/phuong-anhn.jpg?alt=media&token=827ba218-98c6-4591-be85-aeaf9ba6c71f" alt="Phuong-Anh"></img>
        </div>
        <div className="img3">
        <img className="img3" src="https://firebasestorage.googleapis.com/v0/b/voice-project-f2a8b.appspot.com/o/phuonganh-3.jpg?alt=media&token=b4cce413-c4c9-431c-b877-5bd16674956e" alt="Phuong-Anh"></img>
        </div>
        <div className="img2">
        <img className="img2" src="https://firebasestorage.googleapis.com/v0/b/voice-project-f2a8b.appspot.com/o/phuonganh-2.jpg?alt=media&token=e1f0e3df-93d9-48a4-9af4-e007f0a0f4de" alt="Phuong-Anh"></img>
        </div>
      </div >
    </div>
  )
}

export default App;
