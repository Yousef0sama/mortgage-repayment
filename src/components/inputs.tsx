
// imports

// interfaces

import { FormContextI, inputInForm } from "@/interfaces/interfaces"
import { Dispatch, SetStateAction } from "react";

// context

import { FormContext } from "@/context/formContext"

// hooks

import { useContext } from "react"

export default function Inputs( {setAmount, setTerm, setRate} : {setAmount : Dispatch<SetStateAction<inputInForm<number | undefined>>>, setTerm : Dispatch<SetStateAction<inputInForm<number | undefined>>>, setRate : Dispatch<SetStateAction<inputInForm<number | undefined>>> } ) {

  const {form} : FormContextI = useContext(FormContext)!;

  const {amount, term, rate} = form

  return (
    <>
      <div className="w-full relative">
        <div className={`before:content-['£'] ${amount.err ? "before:bg-Red before:text-White" : "before:bg-Slate100 before:text-Slate500"} input-container before:font-bold before:absolute before:p-2 before:px-4 before:rounded-l-lg before:top-[37px] before:left-[1px]`}>
          <label htmlFor="amount" className="text-Slate500">Mortgage Amount</label>
          <br />
          <input type="text" name="amount" id="amount" className={`w-full text-Slate900 font-bold pl-14 outline-none ${amount.err ? "border-Red" : "border-Slate700"} hover:border-Slate900 focus:border-Lime border-[1px] rounded-lg mt-3 p-2`} onChange={ (e) => setAmount({ value: Number(e.target.value) ? Number(e.target.value) : undefined, err: form.amount.err }) }  />
          {
            amount.err ?
            <>
              <br />
              <span className="text-Red p-2">{amount.err}</span>
            </>
            :
            <></>
          }
        </div>
      </div>
      <div className="lg:flex-1 w-full mt-3">
        <div className={`lg:w-[90%] w-full relative before:content-['year'] ${term.err ? "before:bg-Red before:text-White" : "before:bg-Slate100 before:text-Slate500"} input-container before:font-bold before:absolute before:p-2 before:px-4 before:rounded-r-lg before:top-[37px] before:right-[1px]`}>
          <label htmlFor="term" className="text-Slate500">Mortgage Term</label>
          <br />
          <input type="text" name="term" id="term" className={`text-Slate900 w-full font-bold pr-20 outline-none ${term.err ? "border-Red" : "border-Slate700"} hover:border-Slate900 focus:border-Lime border-[1px] rounded-lg mt-3 p-2`} onChange={ (e) => setTerm({ value: Number(e.target.value) ? Number(e.target.value) : undefined, err: form.term.err }) } />
          {
            term.err ?
            <>
              <br />
              <span className="text-Red p-2">{term.err}</span>
            </>
            :
            <></>
          }
        </div>
      </div>
      <div className="flex-1 mt-3">
        <div className={`relative before:content-['%'] ${rate.err ? "before:bg-Red before:text-White" : "before:bg-Slate100 before:text-Slate500"} input-container before:font-bold before:absolute before:p-2 before:px-4 before:rounded-r-lg before:top-[37px] before:right-[0.5px]`}>
          <label htmlFor="rate" className="text-Slate500">Mortgage Rate</label>
          <br />
          <input type="text" name="rate" id="rate" className={`w-full text-Slate900 font-bold pr-14 outline-none ${rate.err ? "border-Red" : "border-Slate700"} hover:border-Slate900 focus:border-Lime border-[1px] rounded-lg mt-3 p-2`} onChange={ (e) => setRate({ value: Number(e.target.value) ? Number(e.target.value) : undefined, err: form.rate.err }) } />
          {
            rate.err ?
            <>
              <br />
              <span className="text-Red p-2">{rate.err}</span>
            </>
            :
            <></>
          }
        </div>
      </div>
    </>
  )

}