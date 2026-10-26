import { TouchableOpacity } from "react-native";
import { BUTTON_SIZE, styles } from "../styles/global-styles";
import { CustomText } from "./custom-text";

interface buttonProps {
  text: string;
  onPress: () => void;
  type?: "normal" | "secondary" | "terciary";
  doble?: boolean;
}

export default function Button({
  text,
  onPress,
  type = "normal",
  doble = false,
}: buttonProps) {
  const getButtonStyle = () => {
    switch (type) {
      case "normal":
        return styles.buttonNormal;
      case "secondary":
        return styles.buttonSecondary;
      default:
        return styles.buttonTerciary;
    }
  };

  const getTextStyle = () => {
    if (type === "normal" && text === "C") return styles.textC;
    if (type === "secondary") return styles.textSecondary;
    if (type === "terciary") return styles.textTerciary;
    return styles.textPrimary;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        doble && { width: BUTTON_SIZE * 2 + 10 },
      ]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <CustomText style={[styles.textPrimary, getTextStyle()]}>
        {text}
      </CustomText>
    </TouchableOpacity>
  );
}
