// imports

// hooks

import { createContext, useState} from "react";

// interFaces

import { ReactNode } from "react"
import { FormI,FormContextI } from "@/interfaces/interfaces";

export const FormContext = createContext<FormContextI | undefined>(undefined);

export default function FormProvider ({ children }: { children: ReactNode }) {

  const [form, setForm] = useState<FormI>({
    amount : {
      value: undefined,
      err: ""
    },
    term : {
      value: undefined,
      err: ""
    },
    rate : {
      value: undefined,
      err: ""
    },
    type : {
      value : "Repayment",
      err : ""
    }
  });

  return (
    <FormContext.Provider value={ {form, setForm} }>
      {children}
    </FormContext.Provider>
  );

};