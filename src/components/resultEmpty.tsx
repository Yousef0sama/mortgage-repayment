
// imports

// svgs

import ResultEmpty from "@/assets/svgs/illustration-empty";

export default function EmptyResult() {

  return (

    <div className="p-5">
      <div className="element-center w-full">
        <ResultEmpty />
      </div>
      <br />
      <h2 className="text-White font-bold text-[22px] text-center"> Results shown here </h2>
      <br />
      <p className="text-center text-Slate300">Complete the form and click &quot;calculate repayments&quot; to see what your monthly repayments would be</p>
    </div>

  )

}