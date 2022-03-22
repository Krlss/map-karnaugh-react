import logo from '../assets/logo.png';

export const Header = () => {
    return (
        <div className='w-full py-2 space-x-2 flex flex-row items-end border-b text-gray-600'>
            <img width={40} height={40} src={logo} className='rounded-lg' />
            <small className='font-bold'>Sistema de Control de Riego</small>
        </div>
    );
}

export const Input = ({
    placeholder,
    onChange,
    value,
    state
}) => {
    return (
        <input type='text' disabled={state.length == 5} placeholder={state.length < 5 ? placeholder : 'Solo se pueden como máximo 5 estados.'} className='w-full max-w-md px-5 py-2 focus:outline-none rounded-md bg-slate-50 '
            maxLength={25} onChange={onChange} value={value} autoFocus />
    );
}

export const ButtonAdd = ({ onClick, state }) => {
    return (
        <button disabled={state.length == 5} onClick={onClick} className='px-5 py-2 font-semibold rounded-md w-36 add'>Agregar</button>
    );
}

export const ButtonCal = ({ onClick, state }) => {
    return (
        state.length > 1 ?
            <button onClick={onClick} className='px-5 py-2 font-semibold rounded-md text-white max-w-min'>Calcular</button>
            : <small>Necesitas al menos 2 estados para poder calcular.</small>
    );
}

export const Tags = ({ letter, text, onClick, children, mykey }) => {
    return (
        <div className='relative w-40 border flex flex-col justify-center items-center rounded-md p-5 mr-2 mt-2'>
            {
                mykey != 0 && <p onClick={onClick} className='absolute top-1 right-3 rotate-45 cursor-pointer hover:text-red-600'>+</p>
            }
            <p className="font-semibold truncate w-32 text-center">{text}</p>
            <small>Denominación: {letter}</small>
            {children}
        </div>
    );
}

export const Checked = ({ onClick, checked }) => {
    return (
        <input onClick={onClick} type="checkbox" checked={checked} onChange={() => { }} className='mt-2 cursor-pointer' />
    );
}

export const Table = ({ head, body }) => {
    return (
        <table className='w-full'>
            <thead className='bg-green-100'>
                <tr>
                    {
                        head.map((e) => <th key={e.letter}>{e.letter}</th>)
                    }
                    <th>Salida</th>
                </tr>
            </thead>
            <tbody>
                {
                    body.map((row, rowkey) => {
                        return (
                            <tr key={rowkey}>
                                {
                                    row.map((col, colkey) =>
                                        <th key={colkey}>{col ? '1' : '0'}</th>
                                    )
                                }
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table>
    );
}