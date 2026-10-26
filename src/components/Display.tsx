import { View } from "react-native";
import { CustomText } from "../components/custom-text";
import { styles } from "../styles/global-styles";

export default function CalculatorDisplay() {
  return (
    <View style={styles.resultsContainer}>
      <CustomText variant="big" style={styles.mainResult} numberOfLines={2}>
        969 × 23
      </CustomText>

      <CustomText
        variant="secondary"
        style={styles.subResult}
        numberOfLines={1}
      >
        22,287
      </CustomText>
    </View>
  );
}
