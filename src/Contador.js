import {useState} from 'react';

function Contador({valor}) {
    const [conteo, setconteo ]= useState(valor);

        const handleIncrease = () => {
            setconteo(conteo + 1);   
        }

        const handleDecrease = () => {
            setconteo(conteo - 1);   
        }

        const handleReset = () => {
            setconteo(valor);   
        }
    

    return (
        <>
          <h1>Contador</h1>  
          <h2>{conteo}</h2>
          <button onClick={() => setconteo(conteo + 1)}>+</button>
          <button onClick={handleReset}>Resetear</button>
          <button onClick={handleDecrease}>-</button>
        </>
    )
}

export default Contador
