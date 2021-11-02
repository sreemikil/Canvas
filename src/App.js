import React, { useCallback, useEffect, useRef, useState } from 'react';

const colors = [
  "Black",
  "White",
  "red",
  "green",
  "yellow",
  "blue"
]

const size = [
  "1",
  "2",
  "4",
  "8",
  "10"
]

function App() {
  const canvasRef = useRef(null);
  const ctx = useRef(null);

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedsize, setSelectedsize] = useState(size[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [lastPosition, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    if (canvasRef.current) {
      ctx.current = canvasRef.current.getContext('2d');
    }
  }, []);

  const draw = useCallback((x, y) => {
    if (mouseDown) {
      ctx.current.beginPath();
      ctx.current.strokeStyle = selectedColor;
      ctx.current.lineWidth = selectedsize;
      ctx.current.lineJoin = 'round';
      ctx.current.moveTo(lastPosition.x, lastPosition.y);
      ctx.current.lineTo(x, y);
      ctx.current.closePath();
      ctx.current.stroke();

      setPosition({
        x,
        y
      })
    }
  }, [lastPosition, mouseDown, selectedColor,selectedsize, setPosition])

  const download = async () => {
    const image = canvasRef.current.toDataURL('image/png');
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  }

  const clear = () => {
    ctx.current.clearRect(0, 0, ctx.current.canvas.width, ctx.current.canvas.height)
  }

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY
    })
    setMouseDown(true)
  }

  const onMouseUp = (e) => {
    setMouseDown(false)
  }

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY)
  }

  return (
    <div className="App">
      <canvas
        style={{
          border: "1px solid #000"
        }}
        width={1200}
        height={600}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      />
      <br />
      <select
          style={{
            padding: "8px 24px",
            color: "#0062ff",
            border: "2px solid #0062ff",
            borderRadius: "4px"
            }}

        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {
          colors.map(
            color => <option 
            key={color} value={color}>{color}</option>
          )
        }
      </select>

      <select
          style={{
            marginLeft: "24px",
            padding: "8px 24px",
            color: "#0062ff",
            border: "2px solid #0062ff",
            borderRadius: "4px"
            }}

        value={selectedsize}
        onChange={(e) => setSelectedsize(e.target.value)}
      >
        {
          size.map(
            size => <option 
            key={size} value={size}>{size}</option>
          )
        }
      </select>

      <button style={{
          marginLeft: "24px",
          padding: "8px 24px",
          color: "#0062ff",
          border: "2px solid #0062ff",
          borderRadius: "4px"
          }} onClick={clear}>Clear</button>
      <button style={{
          marginLeft: "24px",
          padding: "8px 24px",
          background: "#0062ff",
          color: "#ffffff",
          border: "2px solid #0062ff",
          borderRadius: "4px"
          }}
      onClick={download}>Download</button>
    </div>
  );
}

export default App;
