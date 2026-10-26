import { Text, TextProps } from "react-native";
import { styles } from "../styles/global-styles";

type CustomTextProps = TextProps & {
  variant?: "big" | "normal" | "secondary";
};

export function CustomText({
  variant = "normal",
  style,
  ...rest
}: CustomTextProps) {
  const getBaseStyle = () => {
    switch (variant) {
      case "big":
        return styles.mainResult;
      case "secondary":
        return styles.subResult;
      case "normal":
      default:
        return styles.textPrimary;
    }
  };

  return <Text style={[getBaseStyle(), style]} {...rest}></Text>;
}
