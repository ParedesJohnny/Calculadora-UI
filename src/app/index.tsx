import { View } from "react-native";
import Display from "../components/Display";
import Teclado from "../components/Teclado";
import { styles } from "../styles/global-styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.displayVacio}></View>
      <Display />
      <View style={styles.division}></View>
      <Teclado />
    </View>
  );
}
