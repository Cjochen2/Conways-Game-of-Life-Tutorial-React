import React, { useState, useEffect } from 'react';
import Grid from './grid'

const Main = () => {
    const speed = 1000;
    const rows = 30;
    const cols = 50;

    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));

    useEffect(() => {
        seed();
        playButton();
    }, [])

    const selectBox = (row, col) => {
        let gridCopy = [...gridFull];
        gridCopy[row][col] = !gridCopy[row][col];
        setGridFull(gridCopy);
        console.log(gridFull)
    }

    const seed = () => {
        let gridCopy = [...gridFull];
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (Math.floor(Math.random() * 4) === 1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        setGridFull(gridCopy);
    }

    const playButton = () => {
        let intervalId;
        clearInterval(intervalId)
        intervalId = setInterval(play, speed)
    }

    const play = () => {
        let g = gridFull;
        let g2 = [...gridFull];

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let count = 0;
                if (i > 0) if (g[i - 1][j]) count++;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
                if (i > 0 && j < cols - 1) if (g[i - 1][j + 1]) count++;
                if (j < cols - 1) if (g[i][j + 1]) count++;
                if (j > 0) if (g[i][j - 1]) count++;
                if (i < rows - 1) if (g[i + 1][j]) count++;
                if (i < rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
                if (i < rows - 1 && j < cols - 1) if (g[i + 1][j + 1]) count++;
                if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
                if (!g[i][j] && count === 3) g2[i][j] = true;
            }
        }
        setGeneration(generation + 1);
        setGridFull(g2);        
    }

    return (
        <div>
            <h1>The Game of Life</h1>
            <Grid
                gridFull={gridFull}
                rows={rows}
                cols={cols}
                selectBox={selectBox}
            />
            <h2>Generations: {generation}</h2>
        </div>
    )
};

export default Main;