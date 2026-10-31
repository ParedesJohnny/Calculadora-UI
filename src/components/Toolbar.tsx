import { View } from "react-native";
import Button from "../components/Button";
import { styles } from "../styles/global-styles";

interface ToolbarProps {
  onDeletePress?: (value: string) => void;
}

export default function Toolbar({ onDeletePress }: ToolbarProps) {
  return (
    <View style={styles.toolbar}>
      <View />
      <Button text="⌫" onPress={() => onDeletePress?.("⌫")} type="delete" />
    </View>
  );
}
