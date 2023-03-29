import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    width: '100%',
    backgroundColor: '#333333',
  },
  image: { 
    width: 56, 
    // marginTop: 48,
    marginBottom: -40
  },
  boldText: {
    color: '#808080', 
    fontWeight: 'bold'
  },
  text: {
    color: '#808080', 
    marginTop: 5
  }
})