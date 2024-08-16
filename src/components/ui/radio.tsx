// imports

// hooks

import { useContext } from "react";

// context

import { RadioContext } from "@/context/radioContext";

// interfaces

import type { InputContextI, InputI, inputInForm } from "@/interfaces/interfaces"
import { Dispatch, SetStateAction } from "react";

// utils

import ToggleActiveRadio from "@/utils/toggleActiveRadio"

export default function Radio({id, value, isActive, setType} : InputI & {setType : Dispatch<SetStateAction<inputInForm<"Repayment" | "Interest Only">>>}) {

  const {inputs, setInputs} : InputContextI = useContext(RadioContext)!;

  function RadioCLick() {
    ToggleActiveRadio(inputs, setInputs, id);
    setType({value, err:''})
  }

  return (
    <div className={`flex flex-wrap ${isActive ? "bg-Lime/20" : "bg-White"} p-3 my-2 border-[1px] ${isActive ? "border-Lime" : "border-Slate900 hover:border-Lime"} cursor-pointer rounded-lg`} onClick={() => RadioCLick()}>

      {/* circle */}

      <div className="w-[10%] flex justify-center items-center">
        <div className={`bg-White w-4 h-4 ${isActive ? "border-Lime" : "border-gray-600"} border-[2px] top-[13px] rounded-full`}>
          {
            isActive &&
            <span className="bg-Lime w-[10px] h-[10px] mx-auto mt-[1.25px] block rounded-full"></span>
          }
        </div>
      </div>

      {/* text */}

      <div className="flex-1 text-Slate900 font-bold">{value}</div>

    </div>
  )
}