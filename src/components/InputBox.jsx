import React from "react";
import { useState, useEffect, useId } from 'react'

function InputBox({label, amount={}, onAmountChange, onCurrencyChange, currencyOptions=[], selectCurrency, amountDisable=false, currencyDisable=false, className='' }){

    const amountInputId =useId();
    return(
        <>
        <div className='text-white '>

            <div className='bg-gray-800 w-11/12 mx-auto rounded-2xl  p-6'>
                <div className='flex flex-wrap justify-between mb-2'>
                    <label htmlFor={amountInputId}>{label}</label>
                    <div>Currency type</div>
                </div>
                <div className='flex flex-wrap justify-between '>
                    <input 
                    id={amountInputId}
                    type="number"
                    placeholder="Amount"
                    onChange={(e)=>{
                        onAmountChange(Number(e.target.value));
                    }}
                    disabled={amountDisable}
                    value={amount || {}}
                    className="px-4 p-1 rounded-2xl text-lg text-black"/>
                    
                    <select 
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                    className='text-black rounded-lg'>
                        {
                            currencyOptions.map((currency)=>(
                                <option key={currency} value={currency}>{currency}</option>
                            ))
                        }
                    </select>
                </div>
            </div>

        </div>
        </>
    )
}
export default InputBox;