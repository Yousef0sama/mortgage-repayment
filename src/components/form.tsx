
// imports

// components

import Inputs from "./inputs"
import RadiosFetch from "./fetch/radioFetch";
import ClearButton from "./ui/clearButton"
import Button from "./ui/button";

// context

import RadioProvider from "@/context/radioContext";
import { FormContext } from "@/context/formContext";

// hooks

import { useContext, useState } from "react";

// interfaces

import { inputInForm, FormContextI } from "@/interfaces/interfaces";

export default function Form(){

  const {form} : FormContextI = useContext(FormContext)!;

  const [amount, setAmount] = useState<inputInForm<number | undefined>>(form.amount),
        [term, setTerm] = useState<inputInForm<number | undefined>>(form.term),
        [rate, setRate] = useState<inputInForm<number | undefined>>(form.rate),
        [type, setType] = useState<inputInForm<"Repayment" | "Interest Only">>(form.type);

  return (
    <form>
      <div className="flex flex-wrap">
        {/* header of form */}
        <div className="flex-1">
          <span className="text-2xl font-bold text-Slate900">Mortgage calculator</span>
        </div>
        <div className="flex-1">
          <ClearButton />
        </div>
      </div>
      <br />
      {/* text inputs */}
      <div className="py-2 flex flex-wrap">
        <Inputs setAmount={setAmount} setTerm={setTerm} setRate={setRate} />
      </div>
      {/* radio inputs */}
      <div className="w-full">
        <div className="text-Slate700">Mortgage Type</div>
        <RadioProvider>
          <RadiosFetch setType={setType} />
        </RadioProvider>
      </div>
      {/* submit button */}
      <div className="w-full mt-10">
          <Button amount={amount} term={term} rate={rate} type={type} />
      </div>
    </form>
  )

}