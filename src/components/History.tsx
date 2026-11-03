import { ScrollView, TouchableOpacity, View } from "react-native";

import type { HistoryItem } from "../hooks/useCalculator";
import { styles } from "../styles/global-styles";
import { CustomText } from "./custom-text";

interface HistoryProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onClear: () => void;
}

export default function History({ history, onSelect, onClear }: HistoryProps) {
  return (
    <View style={styles.historyPanel}>
      <View style={styles.historyHeader}>
        <CustomText style={styles.historyTitle}>Historial</CustomText>

        <TouchableOpacity onPress={onClear}>
          <CustomText style={styles.historyAction}>Limpiar</CustomText>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.historyList}
        keyboardShouldPersistTaps="handled"
      >
        {history.length === 0 ? (
          <CustomText style={styles.historyEmpty}>
            No hay cálculos todavía
          </CustomText>
        ) : (
          history.map((item, index) => (
            <TouchableOpacity
              key={`${item.formula}-${index}`}
              style={styles.historyItem}
              onPress={() => onSelect(item)}
            >
              <CustomText style={styles.historyFormula}>
                {item.formula} =
              </CustomText>

              <CustomText style={styles.historyResult}>
                {item.result}
              </CustomText>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}
