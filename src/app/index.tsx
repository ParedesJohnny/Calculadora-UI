import Toolbar from "@/components/Toolbar";
import { useCalculator } from "@/hooks/useCalculator";
import { View } from "react-native";
import Display from "../components/Display";
import Teclado from "../components/Teclado";
import { styles } from "../styles/global-styles";

export default function Index() {
  const { formula, result, escribir, limpiar, borrar, calcular } =
    useCalculator();
  const handleButtonPress = (value: string) => {
    switch (value) {
      case "C":
      case "AC":
        limpiar();
        break;
      case "DEL":
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
      <View style={styles.displayVacio}></View>
      <Display formula={formula} result={result} />
      <Toolbar />
      <View style={styles.division}></View>
      <Teclado onpress={handleButtonPress} />
    </View>
  );
}
