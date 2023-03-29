import { Text, View } from "react-native"
import { styles } from "./styles"

type Props = {
  text: string,
  color: string,
  counter: number
}

export function ListCounter ({text, color, counter}: Props) {
  return (
    <View style={styles.view}>
      <Text style={{ color, fontWeight: 'bold', fontSize: 14 }}>{text}</Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
    </View>
  )
}