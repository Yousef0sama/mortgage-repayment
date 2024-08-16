"use client"

// imports

// context

import ResultProvider from "@/context/resultContext";
import FormProvider from "@/context/formContext";

// components

import Form from "@/components/form";
import Result from "@/components/result";

export default function App() {

    return (
      <ResultProvider>
        <FormProvider>
          <div className="md:container md:flex md:flex-wrap bg-White md:w-[70vw] w-full md:h-auto md:rounded-3xl overflow-hidden">

            <div className="bg-transparent md:flex-1 w-full md:h-full h-auto p-10 md:px-5 md:pb-5">
                <Form></Form>
            </div>

            <div className="bg-Slate900 float-right md:rounded-bl-[70px] md:flex-1 w-full h-auto md:p-0 p-10">
                <Result />
            </div>

          </div>
        </FormProvider>
      </ResultProvider>
    )

}
