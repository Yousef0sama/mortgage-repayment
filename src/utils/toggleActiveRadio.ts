
// imports

// interfaces

import { Dispatch, SetStateAction } from "react";
import { InputI } from "@/interfaces/interfaces";

export default function toggleActiveRadio(inputs : InputI[], setInputs: Dispatch<SetStateAction<InputI[]>>, id: number) {

  const updatedInputs = inputs.map((input) =>
    input.id === id
      ? { ...input, isActive: true }
      : { ...input, isActive: false }
  );

  setInputs(updatedInputs);

}