// imports

// svgs

import CalculatorIcon from "@/assets/svgs/icon-calculator"

// utils

import calculatePayment from "@/utils/calculatePayment/calculatePayment";

// interfaces

import { FormContextI, ResultContextI, FormI } from "@/interfaces/interfaces";

// hooks

import { useContext, useEffect } from "react";

// context

import { FormContext } from "@/context/formContext";
import { ResultContext } from "@/context/resultContext";


export default function Button({amount, term, rate, type} : FormI) {

  const slate900 : string = "hsl(202, 55%, 16%)";

  const {form, setForm} : FormContextI = useContext(FormContext)!;
  const {setResult} : ResultContextI = useContext(ResultContext)!;

  function buttonClick() {
    const updatedForm : FormI = {
      amount,
      term,
      rate,
      type
    }
    setForm(updatedForm);
    setResult(calculatePayment(updatedForm, setForm))
  }

  return (
    <span className="bg-Lime hover:bg-Lime/50 cursor-pointer py-3 px-7 rounded-full" onClick={ () => buttonClick() }> <CalculatorIcon color={slate900} width="24" height="24" /> Calculate Repayments  </span>
  )

}