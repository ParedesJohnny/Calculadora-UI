import { TouchableOpacity, View } from "react-native";
import { styles } from "../styles/global-styles";
import { CustomText } from "./custom-text";

interface ToolbarProps {
  onDeletePress?: () => void;
}

export default function Toolbar({ onDeletePress }: ToolbarProps) {
  return (
    <View style={styles.toolbar}>
      <View />
      <TouchableOpacity
        style={styles.toolIcon}
        onPress={onDeletePress}
        activeOpacity={0.7}
      >
        <CustomText style={styles.deleteIconText}>⌫</CustomText>
      </TouchableOpacity>
    </View>
  );
}
