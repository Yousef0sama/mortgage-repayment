// imports

// hooks

import { createContext, useState} from "react";

// interFaces

import { ReactNode } from "react"
import { InputI, InputContextI } from "@/interfaces/interfaces";

export const RadioContext = createContext<InputContextI | null>(null);

export default function RadioProvider ({ children }: { children: ReactNode }) {

  const [inputs, setInputs] = useState<InputI[]>([
    {
      id: 1,
      name: "type",
      value: "Repayment",
      isActive: true
    },
    {
      id: 2,
      name : "type",
      value: "Interest Only",
      isActive: false
    }
  ]);

  return (
    <RadioContext.Provider value={ {inputs, setInputs} }>
      {children}
    </RadioContext.Provider>
  );

};
