import { View } from "react-native";
import { CustomText } from "../components/custom-text";
import { styles } from "../styles/global-styles";

interface DisplayProps {
  formula: string;
  result: string;
}

export default function CalculatorDisplay({ formula, result }: DisplayProps) {
  const fontSize =
    formula.length <= 7 ? 70 : Math.max(25, 70 - (formula.length - 7) * 4);

  return (
    <View style={styles.resultsContainer}>
      <CustomText
        variant="big"
        style={[styles.mainResult, { fontSize }]}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.35}
      >
        {formula}
      </CustomText>

      <CustomText
        variant="secondary"
        style={styles.subResult}
        numberOfLines={1}
      >
        {result}
      </CustomText>
    </View>
  );
}
