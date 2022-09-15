import Paper from 'paper';
import React, { useEffect } from 'react';

const Node = () => {
   
    useEffect(() => {
        window.addEventListener('load', () => {
            const rect = new paper.Rectangle(
                new paper.Point(50, 50),
                new paper.Point(100, 100)
            );
            const path = new paper.Path.Rectangle(rect);

            path.fillColor = 'red';
        })
    })

    return(
        <></>
    )
};

export default Draw1;