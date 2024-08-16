
// imports

// interfaces

import { FormI, Checkers } from "@/interfaces/interfaces";
import { Dispatch, SetStateAction } from "react";

// utils

import checkInputs from "../check_inputs";



export default function calculatePayment(form: FormI, setForm : Dispatch<SetStateAction<FormI>>): number | undefined {

  let amount = form.amount.value ?? 0;
  let term = form.term.value ?? 0; // in years
  let rate = form.rate.value ?? 0; // annual interest rate as a decimal

  if ( Number(amount)) amount = Number(amount);
  if ( Number(term)) term = Number(term);
  if ( Number(rate)) rate = Number(rate);

  const feilds : Checkers[] = [
    {
      feild: amount,
      type: "number",
      feildName: "amount"
    },
    {
      feild: term,
      type: "number",
      feildName: "term"
    },
    {
      feild: rate,
      type: "number",
      feildName: "rate"
    },
  ]

  if (checkInputs(feilds, form, setForm)) {
    return undefined
  }


  const monthlyRate = (rate / 100) / 12; // monthly interest rate
  const numberOfPayments = term * 12; // total number of monthly payments

  if (form.type.value === "Repayment") {
    // Calculate the monthly payment for Repayment type
    const monthlyPayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return Number(monthlyPayment.toFixed(2));
  } else {
    // Calculate the monthly payment for Interest Only type
    const monthlyPayment = amount * monthlyRate;
    return Number(monthlyPayment.toFixed(2));
  }
}