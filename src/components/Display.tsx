import { View } from "react-native";
import { CustomText } from "../components/custom-text";
import { styles } from "../styles/global-styles";

interface DisplayProps {
  formula: string;
  result: string;
}

export default function CalculatorDisplay({ formula, result }: DisplayProps) {
  return (
    <View style={styles.resultsContainer}>
      <CustomText variant="big" style={styles.mainResult} numberOfLines={2}>
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
