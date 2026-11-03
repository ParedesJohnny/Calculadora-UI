import { useState } from "react";
import { View } from "react-native";

import History from "@/components/History";
import Toolbar from "@/components/Toolbar";
import { useCalculator } from "@/hooks/useCalculator";

import Display from "../components/Display";
import Teclado from "../components/Teclado";
import { styles } from "../styles/global-styles";

export default function Index() {
  const {
    formula,
    result,
    history,
    escribir,
    limpiar,
    borrar,
    calcular,
    seleccionarHistorial,
    limpiarHistorial,
  } = useCalculator();

  const [showHistory, setShowHistory] = useState(false);

  const handleButtonPress = (value: string) => {
    switch (value) {
      case "C":
        limpiar();
        break;

      case "⌫":
        borrar();
        break;

      case "=":
        calcular();
        break;

      default:
        escribir(value);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayVacio} />

      <Display formula={formula} result={result} />

      <Toolbar
        onDeletePress={handleButtonPress}
        onHistoryPress={() => setShowHistory((visible) => !visible)}
      />

      {showHistory && (
        <History
          history={history}
          onSelect={(item) => {
            seleccionarHistorial(item);
            setShowHistory(false);
          }}
          onClear={limpiarHistorial}
        />
      )}

      <View style={styles.division} />

      <Teclado onpress={handleButtonPress} />
    </View>
  );
}
