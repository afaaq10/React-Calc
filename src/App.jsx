import React from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = React.useState('');
  const [check, setCheck] = React.useState(true)


  const buttonClick = (e) => {
    if (check && (e.target.name == '.' || e.target.name == '+' || e.target.name == '-' || e.target.name == '*' || e.target.name == '/')) return

    setCheck(false)
    setValue(value.concat(e.target.name));
  }

  const clear = () => {
    setValue("");
  }

  const handleDelete = () => {
    setValue(value.slice(0, value.length - 1));
  }

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error")
    }
  }

  return (
    <div className="App">

      <div className='container'>

        <input type="text" value={value} onChange={(e) => handleChange(e.target.value)} />


        <div className='keypad'>
          <button onClick={clear} id='clear' className='operator'>AC</button>
          <button onClick={handleDelete} className='operator'>DEL</button>
          <button name='/' onClick={buttonClick} className='operator'>&divide;</button>
          <button name="7" onClick={buttonClick}>7</button>
          <button name="8" onClick={buttonClick}>8</button>
          <button name="9" onClick={buttonClick}>9</button>
          <button name="*" onClick={buttonClick} className='operator'>&times;</button>
          <button name="4" onClick={buttonClick}>4</button>
          <button name="5" onClick={buttonClick}>5</button>
          <button name="6" onClick={buttonClick}>6</button>
          <button name="-" onClick={buttonClick} className='operator'>-</button>
          <button name="1" onClick={buttonClick}>1</button>
          <button name="2" onClick={buttonClick}>2</button>
          <button name="3" onClick={buttonClick}>3</button>
          <button name="+" onClick={buttonClick} className='operator'>+</button>
          <button name="0" onClick={buttonClick}>0</button>
          <button name="." onClick={buttonClick}>.</button>
          <button onClick={calculate} id='equal' className='operator'>=</button>
        </div>

      </div>

    </div>
  );
}

export default App;
