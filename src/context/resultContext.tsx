// imports

// hooks

import { createContext, useState} from "react";

// interFaces

import { ReactNode } from "react"
import { ResultContextI } from "@/interfaces/interfaces";

export const ResultContext = createContext<ResultContextI | undefined>(undefined);

export default function ResultProvider ({ children }: { children: ReactNode }) {

  const [result, setResult] = useState<number | undefined>(undefined);

  return (
    <ResultContext.Provider value={ {result, setResult} }>
      {children}
    </ResultContext.Provider>
  );

};
