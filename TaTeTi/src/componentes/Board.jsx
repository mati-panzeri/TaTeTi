import { useState } from 'react';
import { Square } from './Square';


export const Board = () => {
    const [board, setBoard] = useState(Array(9).fill(null));


    return (
        <>
        {
            board.map((square, index) => {
                return(
                <Square 
                clase={'square'}
                index = {index}
                key={index}
                >
                    {square}
                </Square>
                )
            })
        }
        </>
    )
}