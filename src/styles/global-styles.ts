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

  buttonDelete: {
    backgroundColor: Colors.background,
    width: BUTTON_SIZE / 2,
    height: BUTTON_SIZE / 2,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 5,
  },

  mainResult: {
    fontSize: 70,
    fontFamily: "Arimo",
    color: Colors.textPrimary,
  },

  subResult: {
    fontSize: 40,
    fontFamily: "Arimo",
    color: Colors.textSecondary,
    textAlign: "right",
    marginBottom: 8,
  },

  textPrimary: {
    fontSize: 55,
    fontFamily: "Arimo",
    color: Colors.textPrimary,
  },

  textSecondary: {
    fontSize: 55,
    fontFamily: "Arimo",
    color: Colors.textSecondary,
  },

  textTerciary: {
    fontSize: 55,
    fontFamily: "Arimo",
    color: Colors.secondaryButton,
  },

  textC: {
    fontSize: 55,
    fontFamily: "Arimo",
    color: Colors.textTerciary,
  },

  deleteIconText: {
    fontSize: 24,
    color: Colors.textSecondary,
  },

  historyIconText: {
    fontSize: 45,
    color: Colors.textSecondary,
    textAlign: "center",
    textAlignVertical: "center",
    includeFontPadding: false,
    lineHeight: 40,
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

  toolbar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
  },

  historyPanel: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 10,

    height: 250,

    backgroundColor: Colors.buttons,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.textSecondary,

    padding: 15,

    zIndex: 10,
    elevation: 10,
  },

  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  historyTitle: {
    fontSize: 22,
    fontFamily: "Arimo",
    color: Colors.textPrimary,
  },

  historyAction: {
    fontSize: 15,
    fontFamily: "Arimo",
    color: Colors.textSecondary,
  },

  historyList: {
    flex: 1,
  },

  historyEmpty: {
    fontSize: 16,
    fontFamily: "Arimo",
    color: Colors.textSecondary,
    textAlign: "center",
    marginTop: 30,
  },

  historyItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },

  historyFormula: {
    fontSize: 16,
    fontFamily: "Arimo",
    color: Colors.textSecondary,
    textAlign: "right",
  },

  historyResult: {
    fontSize: 22,
    fontFamily: "Arimo",
    color: Colors.textPrimary,
    textAlign: "right",
    marginTop: 4,
  },
});
