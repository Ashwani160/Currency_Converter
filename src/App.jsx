import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount]=useState();
  const [from, setFrom]=useState('usd');
  const [to, setTo]=useState('inr');
  const [convertedAmount, setConvertedAmount]=useState();

  let currencyInfo = useCurrencyInfo(from);
  let options = Object.keys(currencyInfo)

  const convert=()=>{
    setConvertedAmount(amount *  currencyInfo[to]);
  }

  return (
    <>
    <div
        className="w-full h-screen bg-[#212121]  bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
    
    <div className='bg-purple-900 text-white text-3xl text-center'>Currency Converter</div>
    
    <div className='w-full max-w-md mx-auto my-40 py-10 bg-opacity-70  bg-white rounded-3xl '>
      <form onSubmit={(e)=>{
        e.preventDefault();
        convert();
      }}>
      <div className='mb-1'><InputBox 
      label='from'
      amount={amount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>setFrom(currency)}
      selectCurrency={from}
      onAmountChange={(amount)=>setAmount(amount)}

        /></div>
      <button 
      onClick={()=>{
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
        
      }}
      className='bg-blue-800 text-white absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-lg hover:animate-pulse'>Swap</button>
      <div className='mt-1'><InputBox
      label='to'
      amount={convertedAmount}
      currencyOptions={options}
      onCurrencyChange={(currency)=>setTo(currency)}
      selectCurrency={to}
      amountDisable={true}
      />
      </div>
      <div className='flex justify-center mt-2 '>
      <button type="submit" className=" bg-blue-600 text-white px-4 py-3 rounded-lg hover:border-2 hover:border-blue-500 hover:transition-all duration-300 hover:-translate-y-1
            hover:shadow-[0em_0.75em_0.5em_-0.4em_#f1ff5c] hover:shadow-cyan-600 hover:bg-transparent hover:text-black hover:font-medium">Convert {from} to {to}</button>
      </div>
      </form>
    </div>
    
    </div>
    </>
  )
}

export default App