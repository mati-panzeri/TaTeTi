import { useState } from 'react';
import { Board } from './componentes/Board';
import { Square } from './componentes/Square';
import { TURNS } from './constants';

function App() {

  return (
    <>
      <main className='board'>
        <h1>Ta Te Ti</h1>

        <section className='game'>
          <Board></Board>
        </section>

        <section className='turn'>
          <Square clase='square' value={TURNS.O} index={TURNS.O}></Square>
          <Square clase='square' value={TURNS.X} index={TURNS.X}></Square>
        </section>

      </main>
    </>
  )
}

export default App
