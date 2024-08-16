
// imports

// components

import EmptyResult from "./resultEmpty"
import ResultCompleted from "./resultCompleted";

// hooks

import { useContext } from "react"

// context

import { ResultContext } from "@/context/resultContext"
import { FormContext } from "@/context/formContext";

// interfaces

import { ResultContextI, FormContextI } from "@/interfaces/interfaces";

export default function Result() {

  const {result} : ResultContextI = useContext(ResultContext)!;

  return (

    <div className={result ? "" : "element-center w-full h-full"}>
      {
        result ?
        <ResultCompleted />
        :
        <EmptyResult />
      }
    </div>

  )

}