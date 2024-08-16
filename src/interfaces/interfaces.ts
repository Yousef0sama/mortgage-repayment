export type inputInForm<T> = {
  value : T | undefined,
  err : string
}

// input interface

export interface InputI {
  id : number,
  name : string,
  value : "Repayment" | "Interest Only",
  isActive: boolean
}

// form interface

export interface FormI {
  amount : inputInForm<number | undefined>,
  term : inputInForm<number | undefined>,
  rate : inputInForm<number | undefined>,
  type : inputInForm<"Repayment" | "Interest Only">
}

// checkers interface

export interface Checkers {
  feild : any,
  type : string,
  feildName : string,
}

// context interfaces

import { Dispatch, SetStateAction } from "react";

// input context interface

export interface InputContextI {
  inputs: InputI[];
  setInputs: Dispatch<SetStateAction<InputI[]>>;
}

// result context interface

export interface ResultContextI {
  result: number | undefined;
  setResult: Dispatch<SetStateAction<number | undefined>>;
}

// form context interface

export interface FormContextI {
  form: FormI;
  setForm: Dispatch<SetStateAction<FormI>>;
}

// svg interface

export interface SVG {
  color : string,
  width : string,
  height : string
}