import React, { useState } from 'react';
import { Header, Input, ButtonAdd, Tags, ButtonCal, Checked, Table, TableKarnaugh } from './components';

import TrueTable from './core/TrueTable';
import KarnaughMap from './core/KarnaughMap';
import { getLetters } from './core/core';
const App = () => {

  const [state, setState] = useState([{ letter: 'S', text: "Sistema", checked: true }]);
  const [text, setText] = useState('');
  const [truthTable, setTruthTable] = useState(null);
  const [karnaughMap, setKarnaughMap] = useState();
  const [letters, setLetters] = useState(null);

  const newState = () => {

    let letter = ['S', 'A', 'B', 'C', 'D', 'F', 'G'];
    /* [S, A] */
    var uniqueLetter = [];
    var flat = false;
    var maybe = '';

    letter.forEach(l => {
      state.forEach(s => {
        if (l != s.letter) {
          maybe = l;
        } else {
          flat = true;
        }
      })
      if (!flat) uniqueLetter.push(maybe);
      flat = false;
    })

    if (state.length < 7) {
      if (text && text.trim()) {
        setState([...state, { letter: uniqueLetter[0], text, checked: true }]);
        setText('');
        setTruthTable(null);
      }
    }
  }

  const calculate = () => {
    if (!state[0].checked) return alert("Enciende el sistema");
    setTruthTable(TrueTable(state));
    setKarnaughMap(KarnaughMap(state, TrueTable(state)));
  }

  return (
    <div className='w-full px-16'>
      <Header />
      <h1 className='text-2xl font-black text-gray-600 my-2'>Estados</h1>
      <div className='flex lg:space-x-2 lg:flex-row flex-col space-x-0 space-y-2 lg:space-y-0 lg:items-center'>
        <Input KeyUp={(e) => e.keyCode === 13 && newState()} state={state} placeholder='Escribir el estado' onChange={(text) => setText(text.target.value)} value={text ? text : ''} />
        {
          state.length < 7 && <ButtonAdd state={state} onClick={newState} />
        }
        <ButtonCal state={state} onClick={calculate} />
      </div>

      <div className='w-full flex flex-row flex-wrap'>
        {
          state ?
            state.map((e, key) =>
              <Tags mykey={key} key={key} letter={e.letter} text={e.text} onClick={() => {
                if (window.confirm("¿Deseas eliminar " + e.text + "?")) {
                  setState(state.filter((e, k) => k != key));
                  setTruthTable(null);
                }
              }}>

                <Checked
                  onClick={(check) => {
                    let array = [...state];
                    let item = { ...array[key] }
                    item.checked = check.target.checked;
                    array[key] = item;
                    setState(array);
                  }}
                  checked={e.checked}
                />
              </Tags>
            ) : null
        }
      </div>

      {
        truthTable &&
        <div className={state.length > 5 ? 'grid lg:grid-cols-2 grid-cols-1' : 'grid md:grid-cols-2 grid-cols-1'}>
          <div>
            <h1 className='text-2xl font-black text-gray-600 my-2'>Tabla de verdad</h1>
            <Table className={state.length > 5 ? 'lg:pr-10 pr-0' : 'md:pr-10'} body={truthTable} head={state} />
          </div>
          <div>
            <h1 className='text-2xl font-black text-gray-600 my-2'>Mapa de Karnaugh</h1>
            {
              karnaughMap && <TableKarnaugh letters={getLetters(state)} body={karnaughMap.map} head={karnaughMap._Header} />
            }
          </div>
        </div>
      }

    </div>

  );
}

export default App;
