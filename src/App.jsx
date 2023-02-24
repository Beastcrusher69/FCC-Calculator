import { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0');

  const handleChange = (event) => {
    const number = event.target.textContent;
    
    if(display === '0'){
      setDisplay(number);
    }
    else{
      setDisplay(display + number);
    }
  }

  const handleOperator = (event) => {
        setDisplay(display + ' ' + event.target.textContent + ' ');
  }

  const handleEquals = () => {
        const answer = eval(display);

        setDisplay(answer);
  }

  const handleClear = () => {
        setDisplay('0');
  }

  const handleDecimal = () => {
        const array = display.split(' ');

        const regex = /\./;

        if(!(regex.test(array[array.length - 1]))){
                setDisplay(display + '.');
        }

  }
  return (
    <div id="calculator">
      <div id="display">
        {display}
      </div>

      <div id="keys">
        <button id="clear"
                className="key jumbo"
                onClick={handleClear}>AC</button>
        <button id="divide" 
                className="key small"
                onClick={handleOperator}>/</button>
        <button id="multiply" 
                className="key small"
                onClick={handleOperator}>*</button>
        <button id="seven" 
                className="key small"
                onClick={handleChange}>7</button>
        <button id="eight" 
                className="key small"
                onClick={handleChange}>8</button>

        <button id="nine" 
                className="key small"
                onClick={handleChange}>9</button>
        <button id="subtract" 
                className="key small"
                onClick={handleOperator}>-</button>
        <button id="four" 
                className="key small"
                onClick={handleChange}>4</button>
        <button id="five" 
                className="key small"
                onClick={handleChange}>5</button>
        <button id="six" 
                className="key small"
                onClick={handleChange}>6</button> 
        <button id="add" 
                className="key small"
                onClick={handleOperator}>+</button>
        <button id="one" 
                className="key small"
                onClick={handleChange}>1</button>
        <button id="two" 
                className="key small"
                onClick={handleChange}>2</button>
        <button id="three" 
                className="key small"
                onClick={handleChange}>3</button>
        <button id="equals"
                className="key vertical"
                onClick={handleEquals}>=</button>
        <button id="zero" 
                className="key jumbo"
                onClick={handleChange}>0</button>
        <button id="decimal" 
                className="key small"
                onClick={handleDecimal}>.</button>


      </div>

    </div>
  );
}

export default App
