import { useState } from "react";

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");
  const [result, setResult] = useState<string>("0");

  const escribir = (value: string) => {
    if (value === ".") {
      const lastSegment = formula.split(/[\+\-\*\/]/).pop();
      if (lastSegment?.includes(".")) return;
    }

    setFormula((prev) => prev + value);
  };

  const limpiar = () => {
    setFormula("");
    setResult("0");
  };

  const borrar = () => {
    setFormula((prev) => prev.slice(0, -1));
  };

  const calcular = () => {
    if (!formula) return;
    try {
      const sanitizedFormula = formula.replace(/x/g, "*").replace(/÷/g, "/");
      const evalResult = Function(
        `'use strict'; return (${sanitizedFormula})`,
      )();

      setResult(String(evalResult));
    } catch (error) {
      setResult("Error");
    }
  };

  return {
    formula,
    result,
    escribir,
    limpiar,
    borrar,
    calcular,
  };
};
