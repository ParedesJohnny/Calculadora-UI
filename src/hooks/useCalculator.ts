import { useState } from "react";
import { Vibration } from "react-native";

export interface HistoryItem {
  formula: string;
  result: string;
}

const MAX_LENGTH = 15;

export const useCalculator = () => {
  const [formula, setFormula] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const evaluateFormula = (currentFormula: string): string => {
    if (!currentFormula) return "";

    try {
      let sanitized = currentFormula.replace(/×/g, "*").replace(/÷/g, "/");

      sanitized = sanitized.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

      const evalResult = Function(`"use strict"; return (${sanitized})`)();

      if (typeof evalResult !== "number" || !Number.isFinite(evalResult)) {
        return "Math ERROR";
      }

      return String(Number(evalResult.toPrecision(12)));
    } catch (error) {
      if (error instanceof SyntaxError) {
        return "Syntax ERROR";
      }

      return "Math ERROR";
    }
  };

  const actualizarConEvaluacion = (nuevaFormula: string) => {
    setFormula(nuevaFormula);

    const subRes = evaluateFormula(nuevaFormula);

    if (subRes === "Math ERROR" || subRes === "Syntax ERROR") {
      setResult("");
    } else {
      setResult(subRes);
    }
  };

  const escribir = (value: string) => {
    Vibration.vibrate(40);

    let nuevaFormula = formula;

    if (value === ".") {
      const lastSegment = formula.split(/[+\-×÷()]/).pop();

      if (lastSegment?.includes(".")) return;
    }

    if (value === "()") {
      const openCount = (formula.match(/\(/g) || []).length;
      const closeCount = (formula.match(/\)/g) || []).length;
      const lastChar = formula.slice(-1);

      if (openCount > closeCount && (/\d/.test(lastChar) || lastChar === ")")) {
        nuevaFormula = formula + ")";
      } else {
        const needsMultiply = /[\d)]$/.test(formula);

        nuevaFormula = formula + (needsMultiply ? "×(" : "(");
      }
    } else if (value === "%") {
      if (!formula || /[+\-×÷(]$/.test(formula)) return;

      nuevaFormula = formula + "%";
    } else {
      if (/^[+×÷]$/.test(value) && (!formula || /[+\-×÷(]$/.test(formula))) {
        return;
      }

      if (value === "-" && /[-+×÷(]$/.test(formula) && formula.endsWith("-")) {
        return;
      }

      nuevaFormula = formula + value;
    }

    if (nuevaFormula.length > MAX_LENGTH) {
      setResult("Limit ERROR");
      return;
    }

    actualizarConEvaluacion(nuevaFormula);
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

    const finalResult = evaluateFormula(formula);

    if (finalResult === "Math ERROR" || finalResult === "Syntax ERROR") {
      setResult(finalResult);
      return;
    }

    setHistory((previous) =>
      [{ formula, result: finalResult }, ...previous].slice(0, 50),
    );

    setFormula(finalResult);
    setResult("");
  };

  const seleccionarHistorial = (item: HistoryItem) => {
    setFormula(item.result);
    setResult("");
  };

  const limpiarHistorial = () => {
    setHistory([]);
  };

  return {
    formula,
    result,
    history,
    escribir,
    limpiar,
    borrar,
    calcular,
    seleccionarHistorial,
    limpiarHistorial,
  };
};
