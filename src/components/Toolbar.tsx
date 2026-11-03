import { View } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/global-styles";

interface ToolbarProps {
  onDeletePress?: (value: string) => void;
  onHistoryPress?: () => void;
}

export default function Toolbar({
  onDeletePress,
  onHistoryPress,
}: ToolbarProps) {
  return (
    <View style={styles.toolbar}>
      <Button text="◷" onPress={() => onHistoryPress?.()} type="history" />

      <Button text="⌫" onPress={() => onDeletePress?.("⌫")} type="delete" />
    </View>
  );
}
