import React, { useState, useEffect } from 'react';
import Grid from './grid'
import Buttons from './buttons'

const Main = () => {
    let rows = 30;
    let cols = 50;
    let speed = 100;

    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));
    const [intervalId, setIntervalId] = useState(null)

    useEffect(() => {
        seed();
        playButton();
        console.log('Component Mounted')
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
        clearInterval(intervalId)
        setIntervalId( setInterval(() => {
            play()
        }, speed)
        )
    }

    const pauseButton = () => {
        clearInterval(intervalId)
    }

    // const slow = () => {
    //     speed = 1000;
    //     playButton();
    // }
    // const fast = () => {
    //     speed = 100;
    //     playButton();
    // }

    const clear = () => {
        let grid = Array(rows).fill().map(() => Array(cols).fill(false));
        setGridFull(grid);
        setGeneration(0);
    }

    // const gridSize = (size) => {
    //     switch(size) {
    //         case '1':
    //             cols=20;
    //             rows=10;
    //         break;
    //         case '2':
    //             cols=50;
    //             rows=30;
    //         break;
    //         case '3':
    //             cols=70;
    //             rows=50;
    //         break;
    //         default:
    //             cols=50;
    //             rows=30;
    //     }
    //     clear();
    // }

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

    const genCount = () => {
        setGeneration(generation + 1)
    }

    return (
        <div>
            <h1>The Game of Life</h1>
            <Buttons
            playButton={playButton}
            pauseButton={pauseButton}
            // slow={slow}
            // fast={fast}
            clear={clear}
            seed={seed}
            // gridSize={gridSize}
            count={genCount}
            />
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