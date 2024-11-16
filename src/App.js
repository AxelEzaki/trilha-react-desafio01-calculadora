import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';

const App = () => {
  const [ currentNumber, setCurrentNumber ] = useState('0');
  const [ firstNumber, setFirstNumber ] = useState('0');
  const [ operation, setOperation ] = useState('');

  const handleClear = () => {
    setFirstNumber('0');
    setCurrentNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };
  const handleSumNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  };
  const handleRemNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const rem = Number(firstNumber) - Number(currentNumber);

      setCurrentNumber(String(rem));
      setFirstNumber('0');
      setOperation('');
    }
  };
  const handleMultiNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const rem = Number(firstNumber) * Number(currentNumber);

      setCurrentNumber(String(rem));
      setFirstNumber('0');
      setOperation('');
    }
  };
  const handleDivideNumbers = () => {
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const rem = Number(firstNumber) / Number(currentNumber);

      setCurrentNumber(String(rem));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          setOperation('');

          break;
        case '-':
          handleRemNumbers();
          setOperation('');

          break;
        case '*':
          handleMultiNumbers();
          setOperation('');

          break;
        case '/':
          handleDivideNumbers();
          setOperation('');

          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={() => handleMultiNumbers()}/>
          <Button label="/" onClick={() => handleDivideNumbers()}/>
          <Button label="C" onClick={() => handleClear() }/>
          <Button label="." disabled/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleRemNumbers()}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleSumNumbers()}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={() => handleEquals()}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
