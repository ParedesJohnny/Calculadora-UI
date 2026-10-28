import { View } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/global-styles";

interface TecladoProps {
  onpress: (value: string) => void;
}

export default function CalculatorKeypad({ onpress }: TecladoProps) {
  return (
    <View>
      <View style={styles.row}>
        <Button text="C" onPress={() => onpress("C")} type="normal" />
        <Button text="()" onPress={() => onpress("()")} type="normal" />
        <Button text="%" onPress={() => onpress("%")} type="normal" />
        <Button text="÷" onPress={() => onpress("/")} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => onpress("7")} type="normal" />
        <Button text="8" onPress={() => onpress("8")} type="normal" />
        <Button text="9" onPress={() => onpress("9")} type="normal" />
        <Button text="X" onPress={() => onpress("")} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => onpress("")} type="normal" />
        <Button text="5" onPress={() => onpress("")} type="normal" />
        <Button text="6" onPress={() => onpress("")} type="normal" />
        <Button text="-" onPress={() => onpress("")} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => onpress("")} type="normal" />
        <Button text="2" onPress={() => onpress("")} type="normal" />
        <Button text="3" onPress={() => onpress("")} type="normal" />
        <Button text="+" onPress={() => onpress("")} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={() => onpress("")} type="normal" doble />
        <Button text="." onPress={() => onpress("")} type="normal" />
        <Button text="=" onPress={() => onpress("")} type="terciary" />
      </View>
    </View>
  );
}
