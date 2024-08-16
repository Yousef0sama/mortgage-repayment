
// imports

// hooks

import { useContext } from "react";

// context

import { RadioContext } from "@/context/radioContext";

// interfaces

import { ReactNode, Dispatch, SetStateAction } from "react";
import { inputInForm } from "@/interfaces/interfaces";

// components

import Radio from "../ui/radio";
import {InputContextI } from "@/interfaces/interfaces";

export default function RadiosFetch({setType} : {setType : Dispatch<SetStateAction<inputInForm<"Repayment" | "Interest Only">>>}) {

  const {inputs} : InputContextI = useContext(RadioContext)!;

  return (
    inputs.map( ({id, name, value, isActive}) : ReactNode => {
      
      return (
        <div key={id} className={`w-full`}>

          <Radio id={id} name={name} value={value} isActive={isActive} setType={setType} />

        </div>
      )
    })
  )

}