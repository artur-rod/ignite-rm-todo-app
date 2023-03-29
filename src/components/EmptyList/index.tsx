import { Image, Text, View } from 'react-native';
import { styles } from './styles';

export function EmptyList() {
  return (
    <View style={styles.view}>
      <View style={styles.line} />
      <Image 
        style={styles.image}
        source={require("../../../assets/task-icon.png")}
        resizeMode="contain"
      />
      <Text style={styles.boldText}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}