import { useState } from 'react'
import logoImage from './assets/main-logo.png'
import { Grid } from './components/grid';
import {calculateImc, Level, levels} from './helpers/imc'
import backImage from './assets/leftarrow.png'

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const imcCalculus = () =>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert('Digite todos os campos');
    }
  }

  const handleBackButton = () =>{
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div className='main h-full'>
      <header>
        <div className='max-w-4xl mx-auto md:py-10'>
          <div className='p-4 flex items-center text-lg md:text-xl font-bold'>
            <img className='w-10 rounded-full' src={logoImage} alt="" />
            <h1 className='text-gray-300 px-3'>IMC Calculator</h1>
          </div>
        </div>
        </header>
      <div className='container flex flex-col md:flex-row text-white max-w-4xl h-auto mx-auto md:px-3'>
        <div className='query flex flex-col flex-1 mx-auto md:my-0 my-10 w-4/5 md:px-3'>
          <h2 className='text-3xl font-bold md:text-center'>Calcule o seu IMC</h2>
          <p className='my-5 text-gray-300'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p> 
          <input className='outline-0 my-2 bg-transparent mb-5 border-b-2 disabled:opacity-25' type="number" placeholder='Digite sua altura em m (Ex: 1.70)'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled = {toShow ? true: false}
          />
          <input className='outline-0 my-2 bg-transparent mb-5 border-b-2 disabled:opacity-25' type="number" placeholder='Digite seu peso em Kg (Ex: 80.5)'
          value={weightField > 0 ? weightField : ''}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          disabled = {toShow ? true: false}
          />
          <button className='bg-orange-400 hover:bg-orange-500 duration-300 my-auto rounded-3xl w-1/2 text-neutral-50 p-2 mx-auto disabled:opacity-50' onClick={imcCalculus} disabled = {toShow ? true: false}>Calcular</button>
        </div>
        {!toShow &&
          <div className='flex-1 mx-auto'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 my-4 md:my-0 md:px-3'>
              {levels.map((item, key) =>(
                <Grid key={key} item={item}/>
              ))}
            </div>
        </div>
        }
        {toShow&& 
            <div className='flex-1 flex items-center mx-auto top-5'>
              <div className='flex place-items-center justify-center absolute w-12 h-12 rounded-full cursor-pointer bg-orange-400 hover:bg-orange-500 duration-300' onClick={handleBackButton}>
                <img src={backImage} alt="" width={25}/>
              </div>
              <Grid item={toShow}/>
            </div>
          }
      </div>
    </div>
  )
}

export default App
