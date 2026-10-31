import { useState } from "react";
import { Vibration } from "react-native";

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const evaluateFormula = (currentFormula: string): string => {
    if (!currentFormula) return "";
    try {
      let sanitized = currentFormula.replace(/x/g, "*").replace(/÷/g, "/");
      sanitized = sanitized.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

      const evalResult = Function(`'use strict'; return (${sanitized})`)();
      if (
        evalResult === undefined ||
        isNaN(evalResult) ||
        !isFinite(evalResult)
      ) {
        return "0";
      }
      return String(evalResult);
    } catch (error) {
      return "";
    }
  };

  const actualizarConEvaluacion = (nuevaFormula: string) => {
    setFormula(nuevaFormula);
    const subRes = evaluateFormula(nuevaFormula);
    setResult(subRes);
  };

  const escribir = (value: string) => {
    Vibration.vibrate(40);

    if (value === ".") {
      const lastSegment = formula.split(/[\+\-\*\/]/).pop();
      if (lastSegment?.includes(".")) return;
    }

    if (value === "()") {
      const openCount = (formula.match(/\(/g) || []).length;
      const closeCount = (formula.match(/\)/g) || []).length;
      const lastChar = formula.slice(-1);

      if (openCount > closeCount && (/\d/.test(lastChar) || lastChar === ")")) {
        actualizarConEvaluacion(formula + ")");
      } else {
        const needsMultiply = /\d$/.test(formula);
        const addition = needsMultiply ? "x(" : "(";
        actualizarConEvaluacion(formula + addition);
      }
      return;
    }

    if (value === "%") {
      if (!formula || /[\+\-\*\/÷(]$/.test(formula)) return;
      actualizarConEvaluacion(formula + "%");
      return;
    }

    actualizarConEvaluacion(formula + value);
  };

  const limpiar = () => {
    Vibration.vibrate(40);
    setFormula("");
    setResult("");
  };

  const borrar = () => {
    Vibration.vibrate(40);
    const nuevaFormula = formula.slice(0, -1);
    actualizarConEvaluacion(nuevaFormula);
    if (!nuevaFormula) {
      setResult("");
    }
  };

  const calcular = () => {
    Vibration.vibrate(40);
    if (!formula) return;
    try {
      const finalResult = evaluateFormula(formula);
      setFormula(finalResult);
      setResult("");
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
