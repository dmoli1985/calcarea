import { useState } from 'react'
import quadradoimg from '/quadrado.jpg'
import trianguloimg from '/triangulo.jpg'
import retanguloimg from '/retangulo.jpg'
import '/src/App.css'

function App() {
  const [shape, setShape] = useState('');
  const [base, setBase] = useState('');
  const [height, setHeight] = useState('');
  const [side, setSide] = useState('');
  const [result, setResult] = useState('');

  const calculateArea = () => {

    if (shape === 'triangulo') {
      if (!base || !height) {
        setResult('Por favor, insira o valor da base e da altura do triângulo.');
        return;
      }
      const area = 0.5 * parseFloat(base) * parseFloat(height);
      setResult(`A área do triângulo é: ${area}`);
    } else if (shape === 'retangulo') {
      if (!base || !height) {
        setResult('Por favor, insira o valor da base e da altura do retângulo.');
        return;
      }
      const area = parseFloat(base) * parseFloat(height);
      setResult(`A área do retângulo é: ${area}`);
    } else if (shape === 'quadrado') {
      if (!side) {
        setResult('Por favor, insira o valor do lado do quadrado.');
        return;
      }
      const area = parseFloat(side) * parseFloat(side);
      setResult(`A área do quadrado é: ${area}`);
    } else {
      setResult('Por favor, selecione uma forma.');
    }
  };

  const handleShapeSelection = (selectedShape) => {
    setShape(selectedShape);
  };
  return (
    <div>
      <h1>CALCULADORA DE ÁREA</h1>

      <div className='shape-selector'>
        <button
          className={shape === 'triangulo' ? 'Selecionado' : ''}
          onClick={() => handleShapeSelection('triangulo')}
        >
          <img src={trianguloimg} alt="Triângulo" />
        </button>
        <button
          className={shape === 'retangulo' ? 'Selecionado' : ''}
          onClick={() => handleShapeSelection('retangulo')}
        >
          <img src={retanguloimg} alt="Retângulo" />
        </button>
        <button
          className={shape === 'quadrado' ? 'Selecionado' : ''}
          onClick={() => handleShapeSelection('quadrado')}
        >
          <img src={quadradoimg} alt="Quadrado" />
        </button>
      </div>

      <div className="separator"></div>

      {shape === 'triangulo' || shape === 'retangulo' ? (
        <div>
          <div>
            <label htmlFor="base">Base:</label>
            <input
              type="number"
              id="base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="height">Altura:</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
      ) : null}

      {shape === 'quadrado' ? (
        <div>
          <label htmlFor="side">Lado:</label>
          <input
            type="number"
            id="side"
            value={side}
            onChange={(e) => setSide(e.target.value)}
          />
        </div>
      ) : null}

      <button onClick={calculateArea}>Calcule a Área</button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default App;