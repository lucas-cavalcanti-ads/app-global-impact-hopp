import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#151A21',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  conteinerButton: {
    alignItems: 'center',
    flex: 1,
    marginTop: 30
  },
  containerCard: {
    backgroundColor: '#151A21',
    padding: 30,
    shadowColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.1,
    shadowRadius: 10

  },
  containerInput: {
    alignItems: 'baseline',
    marginBottom: 70
  },  
  inputStyle: {
    backgroundColor: 'none',
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    borderRadius: 1,
    color: 'white',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 5,
    width: 300
  }
  
});

export { styles };