import { View } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/global-styles";

export default function CalculatorKeypad() {
  return (
    <View>
      <View style={styles.row}>
        <Button text="C" onPress={() => {}} type="normal" />
        <Button text="()" onPress={() => {}} type="normal" />
        <Button text="%" onPress={() => {}} type="normal" />
        <Button text="÷" onPress={() => {}} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={() => {}} type="normal" />
        <Button text="8" onPress={() => {}} type="normal" />
        <Button text="9" onPress={() => {}} type="normal" />
        <Button text="X" onPress={() => {}} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={() => {}} type="normal" />
        <Button text="5" onPress={() => {}} type="normal" />
        <Button text="6" onPress={() => {}} type="normal" />
        <Button text="-" onPress={() => {}} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={() => {}} type="normal" />
        <Button text="2" onPress={() => {}} type="normal" />
        <Button text="3" onPress={() => {}} type="normal" />
        <Button text="+" onPress={() => {}} type="secondary" />
      </View>
      <View style={styles.row}>
        <Button text="0" onPress={() => {}} type="normal" doble />
        <Button text="." onPress={() => {}} type="normal" />
        <Button text="=" onPress={() => {}} type="terciary" />
      </View>
    </View>
  );
}
