import { Image, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

type Props = {
  text: string,
  taskState: boolean,
  onRemove: () => void,
  onPress: () => boolean,
}

export function Task ({ text, taskState, onRemove, onPress }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox 
        text={text}
        style={styles.text}
        onPress={onPress} 
        fillColor={taskState ? '#8284FA' : '#4EA8DE'}
        textStyle={{color: taskState ? '#808080' : '#F2F2F2'}}
      />
      {/* <Text style={styles.text}>{text}</Text> */}
      <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
        <Image
          style={styles.icon}
          source={require("../../../assets/trash-icon.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}