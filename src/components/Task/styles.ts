import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    borderRadius: 5,
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    marginTop: 12,
    marginBottom: 12,
    marginLeft: 8,
    marginRight: 8,
    flex: 1
  },
  deleteButton: {
    height: 32,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'flex-end'
  },
  icon: {
    height: 15
  }
})