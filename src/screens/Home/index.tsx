import { useState } from 'react';
import { Alert, FlatList, Image, TextInput, TouchableOpacity, View } from 'react-native';
import { EmptyList } from '../../components/EmptyList';
import { ListCounter } from '../../components/ListCounter';
import { Task } from '../../components/Task';
import { styles } from './styles';

type Task = {
  id: number,
  text: string,
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState("")

  function handleTaskAdd() {
    if (taskText === "") return 

    setTasks(prevState => [...prevState, {
      id: prevState.length + 1,
      text: taskText,
      completed: false
    }])
    
    setTaskText("")
  }

  function handleTaskDeletion(taskId: number) {
    Alert.alert(
      "Remover Tarefa",
      "Deseja remover essa tarefa?",
      [
        {
          text: "Não",
          onPress: () => {}
        },
        {
          text: "Sim",
          style: "destructive",
          onPress: () => setTasks(prevState => prevState.filter(task => task.id !== taskId))
        },
      ]
    )
  }

  function handleTaskState(taskId: number) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)
    tasks[taskIndex].completed = !tasks[taskIndex].completed
    setTasks([...tasks])
    return tasks[taskIndex].completed
  }

  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <Image 
          style={styles.icon}
          source={require("../../../assets/todo-logo.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} 
        placeholder="Adicione uma nova tarefa" 
        placeholderTextColor="#808080"
        onChangeText={setTaskText}
        value={taskText}
        />
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleTaskAdd} >
          <Image 
            style={styles.buttonIcon}
            source={require("../../../assets/plus.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tasksContainer}>
        <View style={styles.counter}>
          <ListCounter text='Criadas' color='#4EA8DE' counter={tasks.length} />
          <ListCounter text='Concluídas' color='#8284FA' counter={tasks.filter(task => task.completed).length} />
        </View>

        <FlatList 
          data={tasks}
          renderItem={({item}) => (
            <Task 
              key={item.id} 
              text={item.text} 
              taskState={item.completed}
              onRemove={() => handleTaskDeletion(item.id)}
              onPress={() => handleTaskState(item.id)}
            />
          )}
          ListEmptyComponent={(
            <EmptyList />
          )}
        />
      </View>
    </View>
  );
}

