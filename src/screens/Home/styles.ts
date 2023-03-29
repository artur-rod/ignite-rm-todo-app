import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    backgroundColor: '#0D0D0D',
    alignItems: 'center'
  },
  icon: {
    margin: 60,
    width: 150
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: -27
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    borderRadius: 5,
    borderColor: '#0D0D0D',
    borderWidth: 0.5,
    height: 54,
    paddingLeft: 16,
    fontSize: 16,
    marginRight: 4,
    color: '#F2F2F2'
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonIcon: {
    width: 16
  },
  tasksContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    marginTop: 32
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },

});