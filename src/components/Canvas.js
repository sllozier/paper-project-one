import React, { createRef, useEffect } from 'react';
import Paper from 'paper';


const Canvas = props => {
    const canvasRef = createRef();

    useEffect(() => {
        window.addEventListener('load', () => {
            paper.setup(canvasRef.current);
        })
    });

    return (
        <canvas ref={canvasRef} {...props} />

    )
}

export default Canvas;