import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "./app-themes";

const { width } = Dimensions.get("window");
export const BUTTON_SIZE = (width - 60) / 4;

export const styles = StyleSheet.create({
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  buttonNormal: {
    backgroundColor: Colors.buttons,
  },
  buttonSecondary: {
    backgroundColor: Colors.secondaryButton,
  },
  buttonTerciary: {
    backgroundColor: Colors.textSecondary,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 5,
  },
  mainResult: {
    fontSize: 70,
    color: Colors.textPrimary,
  },
  subResult: {
    fontSize: 40,
    color: Colors.textSecondary,
    textAlign: "right",
    marginBottom: 8,
  },
  textPrimary: {
    fontSize: 55,
    color: Colors.textPrimary,
  },
  textSecondary: {
    fontSize: 55,
    color: Colors.textSecondary,
  },
  textTerciary: {
    fontSize: 55,
    color: Colors.secondaryButton,
  },
  textC: {
    fontSize: 55,
    color: Colors.textTerciary,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  resultsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 10,
  },
  displayVacio: {
    padding: 20,
  },
  division: {
    height: 4,
    backgroundColor: Colors.buttons,
    margin: 10,
  },
});
