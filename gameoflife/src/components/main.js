import React, { useState, useEffect, useRef } from 'react';
import Grid from './grid'
import Buttons from './buttons'

let rows = 30;
let cols = 50;
let speed = 100;

const Main = () => {

    const mounted = useRef()

    const [generation, setGeneration] = useState(0);
    const [gridFull, setGridFull] = useState(Array(rows).fill().map(() => Array(cols).fill(false)));
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (!mounted.current) {
            seed();
            playButton();
            mounted.current = true;
            console.log('This Runs')
        }

    }, []);

    const selectBox = (row, col) => {
        let gridCopy = [...gridFull];
        gridCopy[row][col] = !gridCopy[row][col];
        setGridFull(gridCopy);
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
        setIntervalId(setInterval(() => {
            play()
        }, speed)
        )
    }

    const pauseButton = () => {
        clearInterval(intervalId)
    }

    const slow = () => {
        speed = 1000;
        playButton();
    }
    const fast = () => {
        speed = 100;
        playButton();
    }

    const clear = () => {

        clearInterval(intervalId)
        let grid = Array(rows).fill().map(() => Array(cols).fill(false));
        setGridFull(grid);
        setGeneration(0);
    }

    const gridSize = (size) => {
        switch (size) {
            case '1':
                rows = 10;
                cols = 20;
                break;
            case '2':
                rows = 30;
                cols = 50;
                break;
            case '3':
                rows = 50;
                cols = 70;
                break;
            default:
                rows = 30;
                cols = 50;
        }
        clear();
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
        setGeneration(prevGeneration => prevGeneration + 1);
        setGridFull(g2);
    }

    return (
        <div>
            <h1>The Game of Life</h1>
            <Buttons
                playButton={playButton}
                pauseButton={pauseButton}
                slow={slow}
                fast={fast}
                clear={clear}
                seed={seed}
                gridSize={gridSize}
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