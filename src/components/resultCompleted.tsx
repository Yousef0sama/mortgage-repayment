
// imports

// hooks

import { useContext } from "react"

// context

import { ResultContext } from "@/context/resultContext"
import { FormContext } from "@/context/formContext";

// interfaces

import { ResultContextI, FormContextI } from "@/interfaces/interfaces";

// utils

import formatNumberWithCommas from "@/utils/numberFormat/numberFormat";

export default function ResultCompleted() {

  const {result} : ResultContextI = useContext(ResultContext)!;
  const {form} : FormContextI = useContext(FormContext)!;

  return (

    <div className="p-5">
      <br />
      <h2 className="text-White font-bold text-[22px] text-left"> Your results </h2>
      <br />
      <p className="text-left text-Slate300"> Your results are Shown below based on the information you provided. To adjust the results, edit the form and click &quot;calculate repayments&quot; again. </p>
      <br />
      <div className="p-4 border-t-4 border-t-Lime rounded-lg bg-black/25">
        <div className="py-3">
          <p className="text-Slate300"> Your monthly { form.type.value === "Repayment" ? "repayments" : "interests" } </p>
          <h1 className="text-Lime font-bold text-[60px]"> £{formatNumberWithCommas(result!)} </h1>
        </div>
        {
          form.type.value === "Repayment" &&
          <div className="py-3 border-t-[1px] border-t-Slate100/25">
            <p className="text-Slate300"> Total you&apos;ll repay over the term </p>
            <h1 className="text-White font-bold text-[20px]"> £{formatNumberWithCommas(Number((result! * 12 * form.term.value!).toFixed(2)))} </h1>
          </div>
        }
      </div>
    </div>

  )

}